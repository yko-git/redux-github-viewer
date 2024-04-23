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
      <Route path="/redux-github-viewer/" element={<TopPage />} />
      <Route path="/redux-github-viewer/profile" element={<Profile />} />
      <Route path="/redux-github-viewer/issue" element={<Issue />} />
      <Route
        path="/redux-github-viewer/pullrequest"
        element={<PullRequest />}
      />
    </>
  )
);

export default routesBasic;
