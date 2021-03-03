import styles from "./Login.module.css";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Sidebar />
      <h1>Login</h1>
    </div>
  );
}
