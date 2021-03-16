import style from "./User.module.css";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

export default function About() {
  const [userinfo, setUserInfo] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //"Authorization": `Bearer ${localStorage.getItem("token")}`,
  useEffect(async () => {
    const response = await fetch("https://alin-ua-api.herokuapp.com/users/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUserInfo(data);
  }, []);

  return (
    <div>
      <Sidebar />
      <h1>User</h1>
      <div>
        <ul>
          <li>{userinfo.username}</li>
          <li>{userinfo.email}</li>
          <li>{userinfo.created_at}</li>
        </ul>
      </div>
    </div>
  );
}
