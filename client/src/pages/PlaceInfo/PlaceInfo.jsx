import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import urls from "../../urls";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactDOM from "react-dom";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { render } from "react-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    background: "#F2F8FD",
    height: "100%",
    //marginTop: theme.spacing(2),
    textAlign: "center",
    padding: theme.spacing(2),
    //color: theme.palette.text.secondary,
    boxShadow: "3px 6px 37px 2px rgba(0, 0, 0, 0.4)",
  },
  foto: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "500px",
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
      console.log(result.data);
    })();
  }, []);

  return (
    <div>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <img
                className={classes.foto}
                src="https://discover-ukraine.info/uploads/i/i/4ffd2c1051c059.81722594.805.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <h1 className={classes.text}>{place.name}</h1>
                <h2>{place.desc}</h2>
                <Typography className={classes.textp} variant="subtitle1">
                  {place.description}
                  <br />
                  <Link to={`${urls.map}`} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="secondary">
                      Get Back
                    </Button>
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <img
                  style={{ height: "100%", width: "100%", borderRadius: 5 }}
                  src="https://discover-ukraine.info/uploads/i/i/4ffd2c1051c059.81722594.805.jpg"
                  alt=""
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                {/* <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src={place.mapSrc}
                  // style="border: 1px solid black"
                ></iframe> */}
                <iframe
                  width="425"
                  height="350"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src={place.mapSrc}
                  // style="border: 1px solid black"
                ></iframe>
                <br />
                <small>
                  <a href="https://www.openstreetmap.org/?mlat=49.84404&amp;mlon=24.02622#map=19/49.84404/24.02622">
                    Посмотреть более крупную карту
                  </a>
                </small>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
