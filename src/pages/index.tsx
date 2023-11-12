import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import ErrorPage from "@/layout/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
