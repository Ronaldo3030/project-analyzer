import styled from "styled-components";

const ContainerModal = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;

.modal-content{
  width:500px;
border-radius: 8px;
background-color: #f1f1f1;
}
.modal-header,
.modal-footer{
  padding:10px;
}
.modal-title{
  margin:0;
}

.modal-footer{
  display:flex;
  justify-content: flex-end;
}

.modal-body{
  padding:10px;
  border-top:1px solid #c1c1c1;
  border-bottom:1px solid #c1c1c1;
}

.btn-save{
  background-color:rgb(126, 82, 248);
  color: #eee;
}
.btn-close{
  background-color:rgb(250 66 66);
  color: #eee;
}
`

const Button = styled.button`
background-color:rgb(126, 82, 248);
color: #eee;
padding:7.5px;
text-transform: uppercase;
border: none;
cursor: pointer;
border-radius: 4px;
margin: 0 7.5px;
transition: filter ease-in-out .15s;

&:hover{
  filter: brightness(1.1);
}
`


const Modal = (props) => {

  if(!props.show){
    return null
  }

  return (
    <ContainerModal onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">
            {props.title}
          </h4>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <Button className="btn-close" onClick={props.onClose}>Fechar</Button>
          <Button className="btn-save" onClick={props.onSave}>Salvar</Button>
        </div>
      </div>
    </ContainerModal>
  )
}

export default Modal;