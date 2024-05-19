import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TypingTestPage from "./pages/TypingTest";
import BasketballPlayersPage from "./pages/BasketballPlayers";
import WeatherPage from "./pages/Weather";
import NBAStatsPage from "./pages/NBAStats";

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
          element: <BasketballPlayersPage></BasketballPlayersPage>,
        },
        {
          path: "/weather",
          element: <WeatherPage></WeatherPage>,
        },
        {
          path: "/nbastats",
          element: <NBAStatsPage></NBAStatsPage>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
