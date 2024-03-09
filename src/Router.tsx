import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Testpage from "./pages/Testpage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home></Home>,
                },
                {
                    path: "testpage",
                    element: <Testpage></Testpage>,
                },
            ],
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}
