import styles from "./Home.module.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import urls from "../../urls";
const { about, map } = urls;

export default function Home() {
  return (
    <div>
      <Navbar title="myTitle" />
      <h1 className={styles.homeTitle}>Home page</h1>
      <Link to={about}>About</Link>
      <br />
      <Link to={map}>Map</Link>
    </div>
  );
}
