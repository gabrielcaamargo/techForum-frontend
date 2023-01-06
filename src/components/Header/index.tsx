import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, HeaderActions } from './styles';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FiUser, FiSun } from 'react-icons/fi';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BsMoon } from 'react-icons/bs';

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
      <strong><span>Tech</span>Forum</strong>

      <HeaderActions>
        <InputGroup>
          <Input placeholder='Search a topic' _placeholder={{ opacity: 1, color: '#F7F7F7' }}/>
          <InputRightElement children={<RxMagnifyingGlass size={24} color="#70B5FF" /> }/>
        </InputGroup>
        <FiUser color='#FFF' size={32}/>
        <button onClick={handleSwitchTheme}>
          { theme === 'dark' ? <FiSun color='#FFF' size={24}/> : <BsMoon color='#FFF' size={24}/> }
        </button>
      </HeaderActions>
    </Container>
  );
}
