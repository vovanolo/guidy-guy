import styles from "./Contacts.module.css";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div>
      <Sidebar />
      <h1>Contacts</h1>
    </div>
  );
}
