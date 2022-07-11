import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {" "}
          <Post
            author="Gregory Praxedes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores aliquam quis, dolorem fugiat quasi libero quia facere quisquam dicta laudantium. Culpa magnam alias eos repellat et dolores laudantium? Maxime."
          />
          <Post
            author="Valesca Vieira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores aliquam quis, dolorem fugiat quasi libero quia facere quisquam dicta laudantium. Culpa magnam alias eos repellat et dolores laudantium? Maxime."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
