import { FC } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const UserItems: FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link to="/profile">
        <Box sx={{ position: "relative", marginRight: 5 }}>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fshapka-youtube.ru%2Fprikolnaya-avatarka-dlya-igr%2F&psig=AOvVaw1r9llles9Kr5XtHF-N4nZg&ust=1708754893349000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjBmpXmwIQDFQAAAAAdAAAAABAE" />

          <Box
            sx={{
              backgroundColor: "green",
              width: 4,
              height: 4,
              position: "absolute",
              bottom: 2,
              left: 2,
            }}
          ></Box>
        </Box>

        <span>Ann</span>
      </Link>
    </Box>
  );
};

export default UserItems;
