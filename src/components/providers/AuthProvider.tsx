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

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}

const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      //   setUser(authUser || null);
    });

    return () => unListen();
  }, []);

  const values = useMemo(() => ({ user, setUser, ga }), [ga, user]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
