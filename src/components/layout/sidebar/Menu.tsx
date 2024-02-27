import { FC } from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { menu } from "./dataMenu";

const Menu: FC = () => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: "#F1F7FA",
        marginTop: 5,
        marginBottom: 10,
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.link)}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Menu;
