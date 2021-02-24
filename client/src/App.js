import { BrowserRouter, Route } from "react-router-dom";

import routes from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          ></Route>
        ))}
      </BrowserRouter>
    </>
  );
}
