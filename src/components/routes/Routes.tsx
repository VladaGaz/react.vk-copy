import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./list";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";
import Auth from "../pages/auth/Auth";

const RoutesComponent: FC = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !user) {
            console.log("!!!!!!!!");
            return (
              <Route
                path="/auth"
                key="route /auth"
                element={
                  <Layout>
                    <Auth />
                  </Layout>
                }
              />
            );
          }

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
    </BrowserRouter>
  );
};

export default RoutesComponent;
