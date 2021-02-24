import styles from "./Home.module.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import urls from "../../urls";
const { about } = urls;

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.homeTitle}>Home page</h1>
      <Link to={about}>About</Link>
    </div>
  );
}
