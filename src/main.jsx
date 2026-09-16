import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AddUser } from "./components/AddUser.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/addUser", element: <AddUser /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>,
);
