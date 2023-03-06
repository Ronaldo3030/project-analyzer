import styled from 'styled-components';
import Logo from '../Logo';
import ListButton from '../ListButton'
import ListProjects from '../ListProjects'

const ContainerContainer = styled.div`
background-color: #FFFFFF;
width: 90%;
height: 80%;
border-radius: 16px;
display: grid;
grid-template-columns: 1fr 3fr;

.meus-projetos{
  overflow-y: auto;
}
`
const MenuLeftContainer = styled.div`
background-color: #F8F9FA;
height: 100%;
width:100%;
border-radius: 16px 0 0 16px;
padding: 15px 7.5px;
color: rgb(108,117,125);
`

function Container() {
  return (
    <ContainerContainer>
      <MenuLeftContainer>
        <Logo />
        <ListButton />
      </MenuLeftContainer>
      <div className='meus-projetos'>
        <h3>Minhas tarefas</h3>
        <ListProjects />
      </div>
    </ContainerContainer>
  );
}

export default Container;
