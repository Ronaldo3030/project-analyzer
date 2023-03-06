import styled from 'styled-components';
import formatDate from '../../functions/formatDate';
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Badge from '../Badge';

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgb(108 117 125 / 16%);  
  align-items: center;
  min-width: 350px;

  input{
    margin-right: 10px;
    height: 15px;
    width: 15px;
  }
  .left{
    display:flex;
    align-items: center;
  }

  button{
    border: none;
    background-color: transparent;
    font-size: 17.5px;
    margin: 0 2.5px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color .1s ease-in-out;
    position: relative;

    &:hover{
      color: rgb(96, 56, 209);
    }
  }
  .container-buttons{
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

const Complete = styled.span`
  height: 1px;
  width: 90%;
  background: #a3a3a3;
  position: absolute;
  padding-left: 10px;
  left: 30px;
`

function ItemProject(props) {
  const [checked, setChecked] = useState(true);
  const handleDelete = () => {
    props.onDelete(props.id);
  }
  const handleState = () => {
    props.onState(props.id);
    setChecked(!checked);
  }

  useEffect(() => {
    if (props.state === true) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, []);

  return (
    <ItemContainer className={ checked ? 'complete' : ''}>
      {
        checked
          ? <Complete />
          : ''
      }
      <div className='left'>
        <input type="checkbox" onChange={handleState} checked={checked} />
        <p>{props.name}</p>
      </div>
      <div className='left'>
        <Badge text={props.status}/>
        <p>{formatDate(props.date)}</p>
        <div className="container-buttons">
          <button onClick={handleDelete}>
            <BsTrashFill />
          </button>
        </div>
      </div>
    </ItemContainer>
  );
}

export default ItemProject;
