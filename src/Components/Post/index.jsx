import { Avatar } from "../Avatar";
import * as S from "./styles";

export const Post = () => {
  return (
    <S.ContainerBox>
      <header>
        <div className="card-profile">
          <Avatar src="https://github.com/diegofchagas.png" />
          <div>
            <strong>Diego Chagas</strong>
            <span>Desenvoledor Full Stack</span>
          </div>
        </div>
        <time title="11 de janeiro às 16:00h" dateTime="2024-01-17 16:00:00"> Públicado há 1h</time>
      </header>
      
      <S.ContentPost>
        <p>Fala galeraa 👋</p>
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
      </S.ContentPost>

      <S.FormComment>
        <p>Deixe seu feedback</p>
        <textarea name="" id="" placeholder="Escreva um comenário"></textarea>
        <button>Publicar</button>
      </S.FormComment>
    </S.ContainerBox>
  );
};
