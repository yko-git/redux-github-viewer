import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import TopPage from "./pages/TopPage";
import Profile from "./pages/Profile";
import Issue from "./pages/Issue";
import PullRequest from "./pages/PullRequest";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/pullrequest" element={<PullRequest />} />
    </>
  ),
  {
    basename: "/redux-github-viewer",
  }
);

export default routesBasic;
