import style from "./User.module.css";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../Login";
import Sidebar from "../../components/Sidebar";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function About() {
  const [userinfo, setUserInfo] = useState([]);
  const [jwt, setJwt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [сheckTransition, setCheckTransition] = useState(false); // Перевірка на перехід сторінка User

  useEffect(() => {
    setLoading(true);
    (async function () {
      const response = await fetch(
        "https://alin-ua-api.herokuapp.com/users/me",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setJwt(localStorage.getItem("token"));
        setCheckTransition(true);
        console.log(data);
        setUserInfo(data);
      } else {
        alert("Помилка HTTP (Invalid token): " + response.status);
        setCheckTransition(false);
      }
    })();
  }, []);

  if (jwt === null && сheckTransition === false) {
    return <Login />;
  }

  return (
    <div>
      <Sidebar />
      <h1>User</h1>
      <div>
        {loading ? (
          <Grid container justify="center">
            <CircularProgress color="secondary" />
          </Grid>
        ) : (
          <ul>
            <li>{userinfo.username}</li>
            <li>{userinfo.email}</li>
            <li>{userinfo.created_at}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
