import styles from "./MapSidebar.module.css";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    background: "#D7E1E9",
    minHeight: 700,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MapSidebar() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const res = await axios("https://alin-ua-api.herokuapp.com/categories");

    setCategories(res.data);
  }, []);

  function FormRow() {
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="text"
          >
            {categories.map((categori) => (
              <Button key={categori.id}>{categori.title}</Button>
            ))}
          </ButtonGroup>
        </Paper>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <FormRow />
    </div>
  );
}
