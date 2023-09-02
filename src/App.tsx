import router from "./pages";
import Layout from "./layout";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen grid place-content-center">
        <RouterProvider router={router} />
      </div>
    </Layout>
  );
};

export default App;
