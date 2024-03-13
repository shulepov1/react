import { useState } from "react";
import styles from "./RecursiveComponent.module.css";

type Props = {
    colorIndex: number;
    depth: number;
};

export default function RecursiveComponent({
    colorIndex = 0,
    depth = 1,
}: Props) {
    const [childrenCount, setChildrenCount] = useState(0);
    const colors = [
        "rgb(255, 0, 0",
        "rgb(255, 165, 0",
        "rgb(255, 255, 0",
        "rgb(0, 128, 0",
        "rgb(0, 0, 255",
        "rgb(75, 0, 130",
        "rgb(238, 130, 238",
    ];

    const nextColorIndex = (colorIndex + 1) % colors.length;
    const borderColor = colors[colorIndex] + ")";
    const backgroundColor = colors[colorIndex] + ", 0.25)";

    const handleClick = () => {
        if (depth >= 15) {
            alert("Stop it!");
            return;
        }
        const newChildrenCount = childrenCount + 1;
        setChildrenCount(newChildrenCount);
    };

    return (
        <div
            className={styles.component}
            style={{ backgroundColor, border: `3px solid ${borderColor}` }}
        >
            <p>[children: {childrenCount}]</p>
            <button className={styles.addChildButton} onClick={handleClick}>
                Add Child
            </button>
            <div className={styles.children}>
                {Array(childrenCount)
                    .fill(null)
                    .map((item, index) => {
                        return (
                            <RecursiveComponent
                                key={index}
                                colorIndex={nextColorIndex}
                                depth={depth + 1}
                            ></RecursiveComponent>
                        );
                    })}
            </div>
        </div>
    );
}
