import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, HeaderActions } from './styles';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { MagnifyingGlass, Moon, SunDim, User } from 'phosphor-react';

export default function Header() {
  const {theme, setTheme} = useContext(ThemeContext);

  function handleSwitchTheme() {
    if(theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <Container>
      <div className="header">
        <strong><span>Tech</span>Forum</strong>

        <HeaderActions>
          <InputGroup>
            <Input placeholder='Search a topic' _placeholder={{ opacity: 1, color: '#F5F5F5' }}/>
            <InputRightElement children={<MagnifyingGlass size={24} color='#F5F5F5' /> }/>
          </InputGroup>
          <User color='#FFF' size={32}/>
          <button onClick={handleSwitchTheme}>
            { theme === 'dark' ? <SunDim color='#F5F5F5' size={24}/> : <Moon size={24} color='#F5F5F5' /> }
          </button>
        </HeaderActions>
      </div>
    </Container>
  );
}
