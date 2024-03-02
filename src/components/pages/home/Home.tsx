import { useState } from "react";
import AddPost from "./AddPost";
import { IPost } from "../../../types";
import Posts from "./Posts";
import { initialPosts } from "./initialPosts";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  return (
    <div>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
