import { createBrowserRouter } from "react-router-dom";

import TopPage from "./pages/TopPage";
import Profile from "./pages/Profile";
import Issue from "./pages/Issue";
import PullRequest from "./pages/PullRequest";

const routesBasic = createBrowserRouter([
  { basename: "/redux-github-viewer" },
  { path: "/", element: <TopPage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/issue", element: <Issue /> },
  { path: "/pullrequest", element: <PullRequest /> },
]);

export default routesBasic;
