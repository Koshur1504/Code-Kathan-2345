import { Route, Routes } from "react-router-dom";
import { Buisness } from "../pages/buisness/Buisness";
import { Culture } from "../pages/culture/Culture";
import { Earth } from "../pages/earth/Earth";
import { Home } from "../pages/home/Home";
import { Innovation } from "../pages/innovation/Innovation";
import { News } from "../pages/news/News";
import { Sports } from "../pages/sports/Sports";
import { Travel } from "../pages/travel/Travel";
import { Video } from "../pages/video/Video";
import { LayoutRoute } from "../utils/layoutRoute";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/signup/Signup";
import { Admin } from "../pages/Admin/Admin";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { SearchPage } from "../pages/searchPage/SearchPage";

export const layout: LayoutRoute[] = [
  { id: 1, name: "Home", path: "/", isVisible: true, element: <Home /> },
  { id: 2, name: "News", path: "/news", isVisible: true, element: <News /> },
  {
    id: 3,
    name: "Sports",
    path: "/sports",
    isVisible: true,
    element: <Sports />,
  },
  {
    id: 4,
    name: "Buisness",
    path: "/buisness",
    isVisible: true,
    element: <Buisness />,
  },
  {
    id: 5,
    name: "Innovation",
    path: "/innovation",
    isVisible: true,
    element: <Innovation />,
  },
  {
    id: 6,
    name: "Culture",
    path: "/culture",
    isVisible: true,
    element: <Culture />,
  },
  {
    id: 7,
    name: "Travel",
    path: "/travel",
    isVisible: true,
    element: <Travel />,
  },
  { id: 8, name: "Earth", path: "/earth", isVisible: true, element: <Earth /> },
  {
    id: 9,
    name: "Video",
    path: "/video",
    isVisible: false,
    element: <Video />,
  },
  {
    id: 10,
    name: "Login",
    path: "/login",
    isVisible: false,
    element: <Login />,
  },
  {
    id: 11,
    name: "Signup",
    path: "/signup",
    isVisible: false,
    element: <Signup />,
  },
  {
    id: 12,
    name: "Admin",
    path: "/admin",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Admin />
      </ProtectedRoutes>
    ),
  },
  {
    id: 14,
    name: "Home",
    path: "search/:id",
    isVisible: false,
    element: <SearchPage />,
  },
  {
    id: 15,
    name: "Default",
    path: "*",
    isVisible: false,
    element: <Home />,
  },
];

export const Allroutes = () => {
  return (
    <Routes>
      {layout.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
