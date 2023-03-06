import styled from 'styled-components';
import ItemProject from '../ItemProject'
import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';

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
const ListProjectsContainer = styled.ul`

  
`

function ListProjects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(`${url}/api/projects`)
      const data = response.data;

      setProjects(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <ContainerAddTarefa>
        <p><BsPlus /> Adicionar tarefa</p>
      </ContainerAddTarefa>
      <ListProjectsContainer>
        {
          projects.length === 0
            ? (<p>Carregando...</p>)
            : (
               projects.map(project => (
                <ItemProject key={project.id} name={project.name} date={project.conclusion} />
               ))
              )
        }
      </ListProjectsContainer>
    </>
  );
}

export default ListProjects;
