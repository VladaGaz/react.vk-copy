import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IUserData } from "./types";

const Auth: FC = () => {
  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      } catch (error: any) {
        error.message && setError(error.message);
      }
    }

    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <form onSubmit={handleLogin}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
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
    </>
  );
};

export default Auth;
