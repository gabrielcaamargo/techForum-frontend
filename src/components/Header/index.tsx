import { Container, HeaderActions } from './styles';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FiUser, FiSun } from 'react-icons/fi';
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Header() {
  return (
    <Container>
      <strong><span>Tech</span>Forum</strong>

      <HeaderActions>
        <InputGroup>
          <Input placeholder='Search a topic' _placeholder={{ opacity: 1, color: '#F7F7F7' }}/>
          <InputRightElement children={<RxMagnifyingGlass size={24} color="#70B5FF" /> }/>
        </InputGroup>
        <FiUser color='#FFF' size={32}/>
        <FiSun color='#FFF' size={32}/>
      </HeaderActions>
    </Container>
  );
}
