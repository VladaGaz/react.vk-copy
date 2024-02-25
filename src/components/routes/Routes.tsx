import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./list";
import Layout from "../layout/Layout";

const RoutesComponent: FC = () => {
  const isAuth = true;

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth) return false;

          return (
            <Route
              path={route.path}
              // exact={route.exact}
              key={`route ${route.path}`}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
