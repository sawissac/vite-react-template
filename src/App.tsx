import router from "./pages";
import Layout from "./layout";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
