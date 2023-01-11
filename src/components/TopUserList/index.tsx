import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container, User, UserList } from './styles';

export default function TopUserList() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <h3><span>Top</span> Users</h3>

      <UserList>
        <User actualTheme={theme}>
          <p>Gabriel Camargo</p>
          <small>102 interactions this month</small>
        </User>

        <User actualTheme={theme}>
          <p>Mateus Silva</p>
          <small>90 interactions this month</small>
        </User>

        <User actualTheme={theme}>
          <p>Manoel Gomes</p>
          <small>78 interactions this month</small>
        </User>

        <User actualTheme={theme}>
          <p>Gabriel Camargo</p>
          <small>55 interactions this month</small>
        </User>
      </UserList>
    </Container>
  );
}
