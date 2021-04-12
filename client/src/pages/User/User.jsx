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
      const data = await response.json();
      setLoading(false);
      setJwt(localStorage.getItem("token"));
      console.log(data);
      setUserInfo(data);
    })();
  }, []);

  if (jwt === null) {
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
