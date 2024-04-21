import { createBrowserRouter } from "react-router-dom";

import TopPage from "./pages/TopPage";
import Profile from "./pages/Profile";
import Issue from "./pages/Issue";

const routesBasic = createBrowserRouter([
  { path: "/redux-github-viewer/", element: <TopPage /> },
  { path: "/redux-github-viewer/profile", element: <Profile /> },
  { path: "/redux-github-viewer/issue", element: <Issue /> },
]);

export default routesBasic;
