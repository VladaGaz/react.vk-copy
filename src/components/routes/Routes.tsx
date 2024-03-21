import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./list";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";

const RoutesComponent: FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    routes.map((route) => route.auth && !user && navigate("/auth"));
  }, [navigate, user]);

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default RoutesComponent;
