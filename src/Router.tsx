import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TypingTestPage from "./pages/TypingTest";
import BasketballPlayersPage from "./pages/BasketballPlayers";

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
                    path: "/typing",
                    element: <TypingTestPage></TypingTestPage>,
                },
                {
                    path: "/players",
                    element: <BasketballPlayersPage></BasketballPlayersPage>
                }
            ],
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}
