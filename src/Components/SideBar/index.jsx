import { Avatar } from "../Avatar"


export const SideBar = () => {
  return (
    <div>

      <div>
        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <Avatar src="https://github.com/diegofchagas.png"  />
      <strong>Diego Chagas</strong>
      <span>Desenvolvedor FullStack</span>

      <footer>
        <a href="#">Editar seu Perfil</a>
      </footer>
    </div>
  )
}
