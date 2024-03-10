import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link
                        to="/"
                        className={
                            activeIndex === 0
                                ? styles.navlinkActive
                                : styles.navlink
                        }
                        onClick={() => {
                            setActiveIndex(0);
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="testpage"
                        className={
                            activeIndex === 1
                                ? styles.navlinkActive
                                : styles.navlink
                        }
                        onClick={() => {
                            setActiveIndex(1);
                        }}
                    >
                        Testpage
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
