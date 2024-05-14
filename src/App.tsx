import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { LoginPage } from "./pages/auth/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="grid h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}
