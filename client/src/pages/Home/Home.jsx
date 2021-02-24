import styles from "./Home.module.css";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.homeTitle}>Home page</h1>
    </div>
  );
}
