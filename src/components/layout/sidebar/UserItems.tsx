import { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserItems: FC = () => {
  const navigate = useNavigate();
  return (
    <Card sx={{ padding: 2, backgroundColor: "#F1F7FA" }}>
      <Link
        to="/profile"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#111",
          marginBottom: 12,
        }}
      >
        <Box
          sx={{
            position: "relative",
            marginRight: 2,
            borderRadius: "50%",
          }}
        >
          <Avatar
            src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png"
            sx={{ width: 46, height: 46, borderRadius: "50%" }}
          />

          <Box
            sx={{
              backgroundColor: "#4FB14F",
              border: "2px solid #F1F7FA",
              width: 12,
              height: 12,
              position: "absolute",
              bottom: 0,
              right: 0,
              borderRadius: "50%",
            }}
          ></Box>
        </Box>

        <span style={{ fontSize: "14px" }}>Ann Sergeevna</span>
      </Link>

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/messages")}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserItems;
