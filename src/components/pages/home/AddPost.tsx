import { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddPost: FC = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 10,
        }}
      />
      <TextField
        label="Tell me what's new with you"
        variant="outlined"
        sx={{ borderRadius: 25 }}
      />
    </>
  );
};

export default AddPost;
