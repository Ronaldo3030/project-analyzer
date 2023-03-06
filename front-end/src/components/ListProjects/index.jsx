import styled from 'styled-components';
import ItemProject from '../ItemProject'
import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../Modal';

const url = "http://localhost:3030"

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
const ListTasksContainer = styled.ul`

  
`

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  const getTasks = async () => {
    try {
      const response = await axios.get(`${url}/api/tasks`)
      const data = response.data;

      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <ContainerAddTarefa>
        <p onClick={() => setModal(true)}><BsPlus /> Adicionar tarefa</p>
      </ContainerAddTarefa>

      <Modal title="Adicionar tarefa" onClose={() => setModal(false)} show={modal}> 
        <p>asd</p>
      </Modal>

      <ListTasksContainer>
        {
          tasks.length === 0
            ? (<p>Carregando...</p>)
            : (
              tasks.map(project => (
                <ItemProject key={project.id} name={project.name} date={project.conclusion} />
              ))
            )
        }
      </ListTasksContainer>
    </>
  );
}

export default ListTasks;
