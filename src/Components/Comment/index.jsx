import { Avatar } from "../Avatar";
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import * as S from "./styles";

export const Comment = () => {
  return (
    <S.CoomentContainer>
      <Avatar src="https://github.com/diegofchagas.png" />
      <S.BoxContainer className="container-box">
        <S.CommentContent className="comment-content">
          <header>
            <div>
              <strong>Diego Chagas</strong>
              <time>Cerca de 2h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </S.CommentContent>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <small>03</small>
          </button>
        </footer>
      </S.BoxContainer>
    </S.CoomentContainer>
    
  );
};
