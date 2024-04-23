import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import TopPage from "./pages/TopPage";
import Profile from "./pages/Profile";
import Issue from "./pages/Issue";
import PullRequest from "./pages/PullRequest";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<TopPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/pullrequest" element={<PullRequest />} />
      </Route>
    </>
  )
);

export default routesBasic;
