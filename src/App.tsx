import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/gregory6z.png",
        name: "Gregory Praxedes",
        role: "Developer Web",
      },
      content: [
        { type: "paragraph", content: "Salut les gars 👋" },
        {
          type: "paragraph",
          content:
            "Je viens de télécharger un autre projet dans mon portfolio. C'est un projet que j'ai fait à NLW Return, événement Rocketseat. Le nom du projet est DoctorCare 🚀",
        },
        { type: "link", content: "gregory6z/doctorcare" },
      ],
      publishedAt: new Date("2022-06-03 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "Educator @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Salut les gars 👋" },
        {
          type: "paragraph",
          content:
            "Je viens de télécharger un autre projet dans mon portfolio. C'est un projet que j'ai fait à NLW Return, événement Rocketseat. Le nom du projet est DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-06-10 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
