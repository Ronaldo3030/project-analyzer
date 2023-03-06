import styled from 'styled-components';
import ItemProject from '../ItemProject'
import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const url = "http://localhost:3030"
const MessageErro = styled.p`
  background:  rgb(250, 66, 66);
  color: #f1f1f1;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 7.5px;
`

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
position: relative;
  
`
const InputForm = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 15px;
    &:last-child {
      margin-bottom:0;
    }

  input, select{
    padding:2px;
    font-size: 20px;
    color: #646464;
  }
  label{
    margin-bottom:3px;
    font-size: 20px;
  }

  .input-data{
    cursor: default;
  }
`

function ListTasks() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [conclusion, setConclusion] = useState(new Date());
  const [status, setStatus] = useState('');

  const [tasks, setTasks] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [erro, setErro] = useState(false);

  const getTasks = async () => {
    try {
      const response = await axios.get(`${url}/api/tasks/asc`)
      const data = response.data;

      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    await axios.delete(`${url}/api/tasks/${id}`);
    getTasks();
  }
  const handleStateTask = async (id) => {
    const element = await axios.get(`${url}/api/tasks/${id}`);
    const state = element.data.state;
    if(state){
      await axios.put(`${url}/api/tasks/${id}`, {state: false});
      return;
    }
    await axios.put(`${url}/api/tasks/${id}`, {state: true});
  }

  const saveTask = async () => {
    try {
      const sendData = {
        name,
        description,
        status,
        conclusion
      }

      // VERIFY DATA FOR SENDDATA
      for (let key in sendData) {
        if (!sendData[key]) {
          setErro(true)
          return
        }
      }
      sendData.state = false;

      await axios.post(`${url}/api/tasks`, sendData)
        .then(resp => {
          console.log(resp);
          getTasks();
          setName('');
          setDescription('');
          setConclusion(new Date());
          setStatus('');
          setErro(false);
          setModalAdd(false);
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ContainerAddTarefa onClick={() => setModalAdd(true)}>
        <p><BsPlus /> Adicionar tarefa</p>
      </ContainerAddTarefa>

      <ListTasksContainer>
        {
          tasks.length === 0
            ? (<p>Carregando...</p>)
            : (
              tasks.map(project => (
                <ItemProject
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  date={project.conclusion}
                  status={project.status}
                  state={project.state}
                  onDelete={handleDeleteTask}
                  onState={handleStateTask}
                />
              ))
            )
        }
      </ListTasksContainer>


      {/* MODALS */}
      <Modal title="Adicionar tarefa" onClose={() => setModalAdd(false)} show={modalAdd} onSave={saveTask}>
        {erro ? (
          <MessageErro>
            Algum campo está vazio!
          </MessageErro>
        ) : ("")}

        <InputForm>
          <label htmlFor="name">Nome</label>
          <input type="text" id='name' onChange={(e) => { setName(e.target.value) }} required />
        </InputForm>
        <InputForm>
          <label htmlFor="description">Descrição</label>
          <input type="text" id='description' onChange={(e) => { setDescription(e.target.value) }} required />
        </InputForm>
        <InputForm>
          <label htmlFor="conclusion">Conclusão</label>
          <DatePicker
            showIcon
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date)
              setConclusion(date.toJSON())
            }}
            className="input-data"
            required
          />
        </InputForm>
        <InputForm>
          <label htmlFor="status">Status</label>
          <select defaultValue={'default'} name="status" id="status" onChange={(e) => { setStatus(e.target.value) }} required>
            <option value="default" disabled>Selecione o status</option>
            <option value="to-do">A fazer</option>
            <option value="doing">Fazendo</option>
            <option value="done">Feito</option>
          </select>
        </InputForm>
      </Modal>
    </>
  );
}

export default ListTasks;
