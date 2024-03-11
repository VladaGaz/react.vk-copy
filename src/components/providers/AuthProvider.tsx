import {
  FC,
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";

import { IUser, TypeSetState } from "../../types";
import { users } from "../layout/sidebar/dataUsers";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      setUser(
        authUser
          ? {
              id: authUser?.uid,
              avatar: users[0].avatar,
              name: authUser?.displayName || "",
            }
          : null
      );
    });

    return () => unListen();
  }, [ga]);

  const values = useMemo(() => ({ user, setUser, ga }), [ga, user]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
