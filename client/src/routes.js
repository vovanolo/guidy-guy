import Home from "./pages/Home";
import About from "./pages/About";
import Maps from "./pages/Map";
import PlaceInfo from "./pages/PlaceInfo";

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
  {
    path: urls.map,
    exact: true,
    component: Maps,
  },
  {
    path: urls.map + "/:slug",
    exact: true,
    component: PlaceInfo,
  },
];

const Routes = routes.map((route) => {
  return route;
});

export default Routes;

// the export routes
