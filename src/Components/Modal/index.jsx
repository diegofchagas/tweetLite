import * as S from "./style"

export const Modal = ({isOpen, onConfirm, onCancel}) => {
  if(isOpen){
    return (
      <S.Container>
        <div className="modal">
        <h2>Excluir comentário</h2>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
  
        <div className="container-btns">
          <button onClick={onCancel} className="btn-one">
            Cancelar
          </button>
          <button onClick={onConfirm} className="btn-two">
            Sim, excluir
          </button>
        </div>
        </div>
      </S.Container>
    )
  } else{
    return null;
  }
 
}
