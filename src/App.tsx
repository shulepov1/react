import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default App;
