import { Avatar, Button, Card, Chip } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";

const User = () => {
  const { user, ga } = useAuth();

  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: "#F1F7FA",
        border: "none",
        borderRadius: 3,
        marginBottom: 5,
      }}
    >
      <Chip
        avatar={<Avatar alt="" src={user?.avatar} />}
        label={user?.name ? user?.name : "Loading name"}
        variant="outlined"
        sx={{ display: "flex", marginBottom: 2 }}
      />
      <Button variant="outlined" onClick={() => signOut(ga)}>
        Log out
      </Button>
    </Card>
  );
};

export default User;
