import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    background: "#D7E1E9",
    minHeight: "100%",
    maxWidth: 600,
    //padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "3px 6px 37px 2px rgba(0, 0, 0, 0.4)",
    filter: "brightness(70%)",
  },
  foto: {
    width: "100%",
    height: "100%",
    filter: "contrast(70%)",
  },
  text: {
    padding: theme.spacing(1),
  },
}));

export default function PlaceInfo() {
  const classes = useStyles();
  const [place, setPlace] = useState([]);
  const { slug } = useParams();
  useEffect(async () => {
    const result = await axios(
      `https://alin-ua-api.herokuapp.com/places/${slug}`
    );
    setPlace(result.data);
  }, []);

  return (
    <div>
      <div className={classes.paper}>
        <img
          className={classes.foto}
          src="https://discover-ukraine.info/uploads/i/i/4ffd2c1051c059.81722594.805.jpg"
          alt=""
        />
        <h1 className={classes.text}>{place.name}</h1>
        <h2>{place.desc}</h2>
      </div>
    </div>
  );
}
