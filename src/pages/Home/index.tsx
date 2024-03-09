import RecursiveComponent from "../../components/RecursiveComponent";

export default function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <RecursiveComponent colorIndex={0} depth={1}></RecursiveComponent>
        </div>
    );
}
