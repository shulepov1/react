import { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type AppContextType = {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
};

export const AppContext = createContext<AppContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AppContext.Provider value={{ activeIndex, setActiveIndex }}>
      <QueryClientProvider client={queryClient}>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <ReactQueryDevtools initialIsOpen={false} client={queryClient} />
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
