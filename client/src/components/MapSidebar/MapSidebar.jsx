import styles from "./MapSidebar.module.css";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Link } from "react-router-dom";

import Card from "../../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    background: "#D7E1E9",
    height: 700,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MapSidebar() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios("https://alin-ua-api.herokuapp.com/places");

    setData(result.data);
  }, []);

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical outlined primary button group"
            >
              <Link>One</Link>
              <Link>One</Link>
              <Link>One</Link>
              <Link>One</Link>
              <Link>One</Link>
              <Link>One</Link>
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container justify="center">
                {data.map((item) => (
                  <Card key={item.id} name={item.name} desc={item.desc} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
