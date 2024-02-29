import { useState } from "react";
import AddPost from "./AddPost";
import { IPost } from "../../../types";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <div>
      <AddPost setPosts={setPosts} />
    </div>
  );
};

export default Home;
