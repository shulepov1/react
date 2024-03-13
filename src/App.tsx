import { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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
            </QueryClientProvider>
        </AppContext.Provider>
    );
}

export default App;
