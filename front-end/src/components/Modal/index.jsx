import styled from "styled-components";

const ContainerModal = styled.div`
position:fixed !important;
top:0 !important;
left:0 !important;
right:0 !important;
bottom:0 !important;
background-color:rgba(0,0,0,0.5) !important;
display:flex !important;
align-items:center !important;
justify-content:center !important;
color: #000 !important;

.modal-content{
  width:500px !important;
border-radius: 8px !important;
background-color: #f1f1f1 !important;
}
.modal-header,
.modal-footer{
  padding:10px !important;
}
.modal-title{
  margin:0 !important;
}

.modal-footer{
  display:flex !important;
  justify-content: flex-end !important;
}

.modal-body{
  padding:10px !important;
  border-top:1px solid #c1c1c1 !important;
  border-bottom:1px solid #c1c1c1 !important;
}

.btn-save{
  background-color:rgb(126, 82, 248) !important;
  color: #eee !important;
}
.btn-close{
  background-color:rgb(250 66 66) !important;
  color: #eee !important;
}
`

const Button = styled.button`
background-color:rgb(126, 82, 248) !important;
color: #eee !important;
padding:7.5px !important;
text-transform: uppercase !important;
border: none !important;
cursor: pointer !important;
border-radius: 4px !important;
margin: 0 7.5px !important;
transition: filter ease-in-out .15s !important;

&:hover{
  filter: brightness(1.1) !important;
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