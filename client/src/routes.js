import Home from "./pages/Home";
import About from "./pages/About";
import Maps from "./pages/Map";
import PlaceInfo from "./pages/PlaceInfo";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import User from "./pages/User";
import Challenges from "./pages/Challenges";

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
  {
    path: urls.contacts,
    exact: true,
    component: Contacts,
  },
  {
    path: urls.login,
    exact: true,
    component: Login,
  },
  {
    path: urls.registration,
    exact: true,
    component: Registration,
  },
  {
    path: urls.user,
    exact: true,
    component: User,
  },
  {
    path: urls.challenges,
    exact: true,
    component: Challenges,
  },
];

const Routes = routes.map((route) => {
  return route;
});

export default Routes;

// the export routes
