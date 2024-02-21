import RecursiveComponent from "./components/RecursiveComponent";
import "./App.css";

function App() {
    return (
        <main>
            <RecursiveComponent colorIndex={0} depth={1}></RecursiveComponent>
        </main>
    );
}

export default App;
