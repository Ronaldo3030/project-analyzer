import styled from 'styled-components';
import ItemProject from '../ItemProject'
import { BsPlus } from "react-icons/bs";

const ContainerAddTarefa = styled.div`
color: #6038D1;
display: flex;
align-items: center;
border-bottom: 1px solid rgb(108 117 125 / 25%);  
padding: 10px;
margin-bottom: 15px;
cursor: pointer;
p{
  display: flex;
  font-weight: 500;
}
  svg{
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
`
const ListProjectsContainer = styled.ul`

  
`

function ListProjects() {
  return (
    <>
      <ContainerAddTarefa>
        <p><BsPlus /> Adicionar tarefa</p>
      </ContainerAddTarefa>
      <ListProjectsContainer>
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </ListProjectsContainer>
    </>
  );
}

export default ListProjects;
