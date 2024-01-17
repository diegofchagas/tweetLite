import "./App.css";

import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { SideBar } from "./Components/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <aside>
          <SideBar />
        </aside>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
