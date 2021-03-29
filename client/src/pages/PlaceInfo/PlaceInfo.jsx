import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#F2F8FD",
    minHeight: 382,
    //padding: theme.spacing(1),
    textAlign: "center",
    //color: theme.palette.text.secondary,
    boxShadow: "3px 6px 37px 2px rgba(0, 0, 0, 0.4)",
  },
  foto: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    filter: "contrast(70%)",
    filter: "brightness(70%)",
  },
  text: {
    padding: theme.spacing(0),
  },
  textp: { textAlign: "start" },
}));

export default function PlaceInfo() {
  const classes = useStyles();
  const [place, setPlace] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    (async function () {
      const result = await axios(
        `https://alin-ua-api.herokuapp.com/places/${slug}`
      );
      setPlace(result.data);
    })();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12}>
              <img
                className={classes.foto}
                src="https://discover-ukraine.info/uploads/i/i/4ffd2c1051c059.81722594.805.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <h1 className={classes.text}>{place.name}</h1>
                <h2>{place.desc}</h2>
                <Typography className={classes.textp} variant="subtitle1">
                  SLorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit cupiditate vero illo nisi non doloremque
                  perferendis, repudiandae nulla veritatis laudantium saepe
                  totam voluptate aliquid beatae dolorem possimus, adipisci rem
                  quasi. Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Reprehenderit cupiditate vero illo nisi non doloremque
                  perferendis, repudiandae nulla veritatis laudantium saepe
                  totam voluptate aliquid beatae dolorem possimus, adipisci rem
                  quasi. Lorem ipsum dolor sit amet consectetur, adipisicing
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
