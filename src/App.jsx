import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gregory Praxedes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores aliquam quis, dolorem fugiat quasi libero quia facere quisquam dicta laudantium. Culpa magnam alias eos repellat et dolores laudantium? Maxime."
      />
      <Post
        author="Valesca Vieira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores aliquam quis, dolorem fugiat quasi libero quia facere quisquam dicta laudantium. Culpa magnam alias eos repellat et dolores laudantium? Maxime."
      />
    </div>
  );
}

export default App;
