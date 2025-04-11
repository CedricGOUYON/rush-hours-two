import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/Register/RegisterPage";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },

  {
    element: <RegisterPage />,
    path: "/register",
  },
]);

export default router;
