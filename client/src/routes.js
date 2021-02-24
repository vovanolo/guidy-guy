import Home from "./pages/Home";

import urls from "./urls";

const routes = [
  {
    path: urls.home,
    exact: true,
    component: Home,
  },
];

const Routes = routes.map((route) => {
  return route;
});

export default Routes;
