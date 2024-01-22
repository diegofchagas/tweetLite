import "./App.css";

import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { SideBar } from "./Components/SideBar";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/diegofchagas.png",
        name: "Diego Chagas",
        role: "Desenvolvedor FullStack",
      },
      content: [
        { type: "paragraph", content: "JESUS é rei" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "diego.chagas/feed" },
      ],
      publishedAt: new Date("2024-01-10 20:52:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "Desenvolvedor FullStack",
      },
      content: [
        { type: "paragraph", content: "JESUS é rei" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "diego.chagas/feed" },
      ],
      publishedAt: new Date("2024-01-10 20:15:00"),
    },
  ];

  return (
    <>
      <Header />
      <div className="wrapper">
        <aside>
          <SideBar />
        </aside>
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              avatarUrl={post.avatarUrl}
              role={post.role}
              
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
