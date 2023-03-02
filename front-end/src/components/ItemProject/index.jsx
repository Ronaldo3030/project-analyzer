import styled from 'styled-components';

const ProjectContainer = styled.li`
  display: flex;
  color: rgb(108,117,125);
  padding: 10px;
  border-bottom: 1px solid rgb(108 117 125 / 16%);  
  align-items: center;

  input{
    margin-right: 10px;
    height: 15px;
    width: 15px;
  }

`

function ItemProject() {
  return (
    <ProjectContainer>
      <input type="checkbox" name="" id="" />
      <p>Fazer tal coisa</p>
    </ProjectContainer>
  );
}

export default ItemProject;
