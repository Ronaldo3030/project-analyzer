import styled from 'styled-components';
import { BsPlusCircle, BsList } from "react-icons/bs";

const ListButton = styled.ul`
  width: 100%;
`
const Selected = styled.li`
  color: #6038D1;
  background-color: #EBE5FC;
  margin: 5px;
  padding: 15px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: .1s;
  font-size: 15px;

  svg{
    margin-right: 10px;
    font-size: 20px;
    font-weight: 300;
  }
`
const LiButton = styled.li`
  margin: 5px;
  padding: 15px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: .1s;
  font-size: 15px;

    &:hover{
      color: #6038D1;
      background-color: #EBE5FC;
    }

  svg{
    margin-right: 10px;
    font-size: 20px;
    font-weight: 300;
  }
`

function Logo() {
  return (
    <ListButton>
      <Selected><BsList /> Todas as tarefas</Selected>
      <LiButton><BsPlusCircle /> Criar tarefa</LiButton>
    </ListButton>
  );
}

export default Logo;
