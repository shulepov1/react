import { useContext, useEffect } from "react";
import RecursiveComponent from "../../components/recursive/RecursiveComponent";
import { AppContext } from "../../App";

export default function Home() {
    const { setActiveIndex } = useContext(AppContext);

    useEffect(() => {
        setActiveIndex(0);
    }, []);
    return (
        <div>
            <h1>Homepage</h1>
            <RecursiveComponent colorIndex={0} depth={1}></RecursiveComponent>
        </div>
    );
}
