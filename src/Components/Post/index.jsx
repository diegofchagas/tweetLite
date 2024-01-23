import { useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import * as S from "./styles";


export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const publishedDateFormated = format(
    publishedAt,
    "dd 'de' MMMM 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCommentNew = (e) => {
    e.preventDefault();
    const addNewComment  ={id:Math.ceil(Math.random() * 100), newComment:commentText}
    setComments([...comments, addNewComment])
    setCommentText('')
  };

  const deleteComments = (id)=>{
    let commentsWithOutDelete = comments.filter(comment => comment.id !== id)
    setComments(commentsWithOutDelete)
  }

  const isNewCommentEmpty = commentText.length > 0 &&  commentText.trim().length === 0

  return (
    <S.ContainerBox>
      {/* //olhar tag article */}
      <header>
        <div className="card-profile">
          <Avatar src={author.avatarUrl} hasBorder />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedDateFormated}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <S.ContentPost>
        {content.map((content) => {
          if (content.type === "paragraph") {
            return <p key={content.content}>{content.content}</p>;
          } else if (content.type === "link") {
            return (
              <p key={content.content}>
                {" "}
                <a href="http://">{content.content}</a>
              </p>
            );
          }
        })}
        {/* <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="http://">👉 jane.design/doctorcare</a>
        </p>
        <ul>
          <li>
            <a href="http://">#novoprojeto</a>
          </li>
          <li>
            <a href="http://"> #nlw</a>
          </li>
          <li>
            <a href="http://">#rocketseat</a>
          </li>
        </ul> 
        // tirar espaçõ em branco e bloqueado o btn
        */}
      </S.ContentPost>
          
      <S.FormComment onSubmit={handleCommentNew}>
        <p>Deixe seu feedback</p>
        <textarea
          required
          name={commentText}
          value={commentText}
          onChange={({ target }) => setCommentText(target.value)}
          placeholder="Escreva um comenário"
          className={isNewCommentEmpty ? 'alert-text' : ''}
        />
      {isNewCommentEmpty && <span className="alert">Por favor, digite um texto</span>}
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
   
      </S.FormComment>

      <div>
        {
          comments.map(comment => 
          <Comment 
          key={comment.id} 
          content={comment.newComment}
          onDeleteComment={()=>deleteComments(comment.id)}
          /> )
        }
      </div>
    </S.ContainerBox>
  );
};
