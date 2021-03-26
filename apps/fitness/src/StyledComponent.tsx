import styled from 'styled-components';
import logo from './logo.svg';

import { formatPhone } from 'utils/formatPhone';
import './App.css';

const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    background-color: red;
  }
`;

const Logo = styled.img`
  height: 200px;
  @media (max-width: 768px) {
    height: 100px;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: App-logo-spin infinite 20s linear;
`;

const Code = styled.code<{ primary?: boolean }>`
  font-size: 24px;
  color: ${(props) => (props.primary ? 'white' : props.theme.colors.primary)};
  :hover {
    font-size: 36px;
    color: green;
    transition: ease 1s;
  }
`;

const Link = styled.a`
  color: white;
  font-weight: bold;
`;

function StyledComponent() {
  return (
    <Container className="App">
      <header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <Code>src/App.tsx</Code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {formatPhone('8777-777-7777')}
        </Link>
      </header>
    </Container>
  );
}

export default StyledComponent;
