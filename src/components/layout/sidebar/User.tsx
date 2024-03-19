import { Avatar, Button, Card, Chip } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { observer } from "mobx-react-lite";
import store from "../../../store/Store";
import { useEffect, useState } from "react";

const User = observer(() => {
  const { user, ga } = useAuth();
  const { giveUserNameAdded } = store;
  const [name, setName] = useState(user?.name);

  useEffect(() => {
    if (!giveUserNameAdded || !!name) return;

    onAuthStateChanged(ga, (authUser) => {
      if (authUser?.displayName) setName(authUser?.displayName);
    });
  }, [ga, giveUserNameAdded, name, user]);

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
        label={name ? name : "Loading name"}
        variant="outlined"
        sx={{ display: "flex", marginBottom: 2 }}
      />
      <Button variant="outlined" onClick={() => signOut(ga)}>
        Log out
      </Button>
    </Card>
  );
});

export default User;
