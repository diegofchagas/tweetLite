import "./App.css";
import { Header } from "./Components/Header";
import { SideBar } from "./Components/SideBar";

function App() {
  return <>
  <Header/>

  <div>
    <aside>
      <SideBar/>
    </aside>
  </div>
  </>;
}

export default App;
