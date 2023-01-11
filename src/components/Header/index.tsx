import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, HeaderActions, Input } from './styles';
import { Desktop, Moon, SunDim } from 'phosphor-react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  const {theme, setTheme} = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: '48px',
      marginLeft: '-36px',
      backgroundColor: '#45474A',
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
        backgroundColor: '#45474A',
        color: '#F5F5F5',
        '& .MuiMenuItem-root': {
          display: 'flex',
          gap: 4,
          '&:hover': {
            backgroundColor: '#54575B'
          }
        }
      },
    },
  }));

  function handleMenuOption(theme: string) {
    const userSystemTheme = window.matchMedia('(prefers-color-scheme: dark)');

    switch(theme) {
    case 'dark':
      setTheme('dark');
      localStorage.setItem('theme', theme);
      handleClose();
      break;

    case 'light':
      setTheme('light');
      localStorage.setItem('theme', theme);
      handleClose();
      break;

    case 'system':
      userSystemTheme.matches ? setTheme('dark') : setTheme('light');
      localStorage.setItem('theme', theme);
      handleClose();
    }
  }

  return (
    <Container>
      <div className="header">
        <strong><span>Tech</span>Forum</strong>

        <HeaderActions>
          <Input type="text" placeholder='Search about a topic'/>

          <Button
            id="theme-menu"
            aria-controls={open ? 'theme-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {theme === 'dark' ? <SunDim color='#F5F5F5' size={24}/> : <Moon color='#F5F5F5' size={24}/>}
          </Button>

          <StyledMenu
            id="theme-menu"
            aria-labelledby="theme-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            disableScrollLock={false}
          >
            <MenuItem onClick={() => handleMenuOption('dark')}>
              <SunDim color='#F5F5F5' size={24}/>
              Dark mode
            </MenuItem>
            <MenuItem onClick={() => handleMenuOption('light')}>
              <Moon color='#F5F5F5' size={24}/>
              Light mode
            </MenuItem>
            <MenuItem onClick={() => handleMenuOption('system')}>
              <Desktop color='#F5F5F5' size={24} />
              System
            </MenuItem>
          </StyledMenu>
        </HeaderActions>
      </div>
    </Container>
  );
}
