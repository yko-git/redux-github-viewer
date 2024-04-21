import { createBrowserRouter } from "react-router-dom";

import TopPage from "./pages/TopPage";
import Profile from "./pages/Profile";
import Issue from "./pages/Issue";

const routesBasic = createBrowserRouter([
  { path: "/", element: <TopPage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/issue", element: <Issue /> },
]);

export default routesBasic;
