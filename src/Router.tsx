import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/Register/RegisterPage";
import App from "./App";
import NaturePage from "./Pages/Nature/NaturePage";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <NaturePage />,
    path: "/nature",
  },
  {
    element: <RegisterPage />,
    path: "/register",
  },
]);

export default router;
