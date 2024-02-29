import { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUsers";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState("");
  const addPostHandler = () => {
    setPosts((prev) => [
      ...prev,
      {
        author: users[0],
        content,
        createdAt: "5 minutes ago",
      },
    ]);
  };
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: 1,
      }}
    >
      <TextField
        label="Tell me what's new with you"
        variant="outlined"
        InputProps={{ sx: { borderRadius: "25px", bgcolor: "#f9f9f9" } }}
        sx={{ width: "100%" }}
        margin={"normal"}
        onClick={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
