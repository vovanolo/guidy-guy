import Home from "./pages/Home";
import About from "./pages/About";
import urls from "./urls";

const routes = [
  {
    path: urls.home,
    exact: true,
    component: Home,
  },
  {
    path: urls.about,
    exact: true,
    component: About,
  },
];

const Routes = routes.map((route) => {
  return route;
});

export default Routes;
