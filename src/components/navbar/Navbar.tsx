import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { AppContext } from "../../App";
import Search from "../search/Search";

export default function Navbar() {
  const { activeIndex } = useContext(AppContext);
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link
            to="/"
            className={
              activeIndex === 0 ? styles.navlinkActive : styles.navlink
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="typing"
            className={
              activeIndex === 1 ? styles.navlinkActive : styles.navlink
            }
          >
            Typing Test
          </Link>
        </li>
        <li>
          <Link
            to="players"
            className={
              activeIndex === 2 ? styles.navlinkActive : styles.navlink
            }
          >
            Basketball Players
          </Link>
        </li>
        <li>
          <Link
            to="weather"
            className={
              activeIndex === 3 ? styles.navlinkActive : styles.navlink
            }
          >
            Weather
          </Link>
        </li>
        <li>
          <Link
            to="nbastats"
            className={
              activeIndex === 4 ? styles.navlinkActive : styles.navlink
            }
          >
            NBA Stats
          </Link>
        </li>
        <li>
          <Search></Search>
        </li>
      </ul>
    </nav>
  );
}
