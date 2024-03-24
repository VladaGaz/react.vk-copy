import { FC, KeyboardEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../providers/useAuth";
import { Alert } from "@mui/material";
import { IPost, TypeSetState } from "../../../types";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}
const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const { user, db } = useAuth();

  const addPostHandler = async (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" || !user) return;

    try {
      await addDoc(collection(db, "posts"), {
        author: user,
        content,
        createdAt: "5 minutes ago",
      });
    } catch (e: any) {
      setError(e);
      console.error("Error", e);
    }

    setContent("");
  };
  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
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
          onChange={(e) => setContent(e.target.value)}
          value={content}
          onKeyDown={addPostHandler}
        />
      </Box>
    </>
  );
};

export default AddPost;
