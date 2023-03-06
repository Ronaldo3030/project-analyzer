import styled from 'styled-components';

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  color: rgb(108,117,125);
  padding: 10px;
  border-bottom: 1px solid rgb(108 117 125 / 16%);  
  align-items: center;

  input{
    margin-right: 10px;
    height: 15px;
    width: 15px;
  }
  .left{
    display:flex;
    align-items: center;
  }
`

function ItemProject(props) {
  return (
    <ItemContainer>
      <div className='left'>
        <input type="checkbox" />
        <p>{props.name}</p>
      </div>
      <p>{props.date}</p>
    </ItemContainer>
  );
}

export default ItemProject;
