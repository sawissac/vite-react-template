import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import SettingsPage from "./Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
]);

export default router;
