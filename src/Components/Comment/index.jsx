import { useState } from "react";
import { Avatar } from "../Avatar";

import { format } from "date-fns";
import {ptBR} from  "date-fns/locale"

import { Trash, ThumbsUp } from "@phosphor-icons/react";

import * as S from "./styles";

export const Comment = ({content, onDeleteComment}) => {
  const [likeCount, setLikeCount] = useState(0)

  const currentDate = new Date();
  const publishedCommentDate = format(currentDate,"dd 'de' MMMM 'às' HH:mm'h'",{locale:ptBR})

  const handleLikerCounter = ()=>{
    setLikeCount((prevLikeCount)=> prevLikeCount + 1)
  }

  return (
    <S.CoomentContainer>
      <Avatar src="https://github.com/diegofchagas.png" />
      <S.BoxContainer className="container-box">
        <S.CommentContent className="comment-content">
          <header>
            <div>
              <strong>Diego Chagas</strong>
              <time>{publishedCommentDate}</time>
            </div>

            <button onClick={onDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </S.CommentContent>

        <footer>
          <button onClick={handleLikerCounter}>
            <ThumbsUp size={20}/>
            Aplaudir <small>{likeCount}</small>
          </button>
        </footer>
      </S.BoxContainer>
    </S.CoomentContainer>
    
  );
};
