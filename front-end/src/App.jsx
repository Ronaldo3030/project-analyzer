import styled from 'styled-components';
import Container from './components/Container';

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #7E52F8;
  
`

function App() {
  return (
    <AppContainer>
      <Container />
    </AppContainer>
  );
}

export default App;
