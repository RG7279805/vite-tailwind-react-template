import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    children: [
      {
        path: "team",
        element: <></>,
      },
    ],
  },
]);



function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
