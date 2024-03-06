import { Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { IUserData } from "./types";

const Auth: FC = () => {
  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  });

  const handleLogin = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <form onSubmit={handleLogin}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          sx={{ display: "block", marginBottom: 2 }}
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          sx={{ display: "block", marginBottom: 2 }}
          required
        />

        <ButtonGroup variant="outlined">
          <Button type="submit" onClick={() => setIsRegForm(false)}>
            Auth
          </Button>
          <Button type="submit" onClick={() => setIsRegForm(true)}>
            Register
          </Button>
        </ButtonGroup>
      </form>
    </Grid>
  );
};

export default Auth;
