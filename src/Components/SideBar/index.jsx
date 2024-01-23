import { Avatar } from "../Avatar";
import { PencilSimpleLine } from "@phosphor-icons/react";
import * as S from "./styles";

export const SideBar = () => {
  return (
    <S.Aside>
      <img
        className="image-profile"
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="profile">
        <Avatar src="https://github.com/diegofchagas.png" hasBorder />
        <strong>Diego Chagas</strong>
        <span>Desenvolvedor FullStack</span>
      </div>
      <footer>
       
        <a href="#">  <PencilSimpleLine size={20}/>
        Editar seu Perfil</a>
      </footer>
    </S.Aside>
  );
};
