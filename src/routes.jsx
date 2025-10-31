import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/actors", element: <Actors /> },
  { path: "/directors", element: <Directors /> },
  { path: "/movie/:id", element: <Movie /> },
  { path: "*", element: <h1>Not Found</h1> },
];

export default routes;
