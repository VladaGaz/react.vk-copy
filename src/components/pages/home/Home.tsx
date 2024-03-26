import { useState } from "react";
import AddPost from "./AddPost";
import { IPost } from "../../../types";
import Posts from "./Posts";
import { initialPosts } from "./initialPosts";

const Home = () => {
  return (
    <div>
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
