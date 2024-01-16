import "./App.css";
import { Header } from "./Components/Header";
import { SideBar } from "./Components/SideBar";

function App() {
  return <>
  <Header/>

  <div className="wrapper">
    <aside >
      <SideBar/>
    </aside>

    <main>
    oi
    </main>
  </div>
  </>;
}

export default App;
