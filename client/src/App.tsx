import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Game from "./pages/Game";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "upload", element: <Upload /> },
      { path: "game", element: <Game /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
