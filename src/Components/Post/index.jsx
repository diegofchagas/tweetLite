import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import { format, formatDistanceToNow } from "date-fns";
import {ptBR} from  "date-fns/locale"

import * as S from "./styles";

export const Post = ({author,content, publishedAt}) => {

  const publishedDateFormated = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'",{locale:ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale:ptBR,
    addSuffix: true
  })
  return (
    <S.ContainerBox>
      {/* //olhar tag article */}
      <header>
        <div className="card-profile">
          <Avatar src={author.avatarUrl} hasBorder/>
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title= {publishedDateFormated} dateTime={publishedDateFormated} >
            {publishedDateRelativeToNow}
        </time>
      </header>

      <S.ContentPost>
        {content.map(content => {
          if(content.type === 'paragraph'){
            return <p key={content.content}>{content.content}</p>
          } else if (content.type === 'link'){
            return <p key={content.content}> <a href="http://">{content.content}</a></p>
          }
        }
          )}
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
        </ul> */}
      </S.ContentPost>

      <S.FormComment>
        <p>Deixe seu feedback</p>
        <textarea name="" placeholder="Escreva um comenário" />

        <footer>
        <button type="submit">Publicar</button>
        </footer>
      </S.FormComment>

      <div>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </S.ContainerBox>
  );
};
