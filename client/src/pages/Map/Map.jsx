import styles from "./Map.module.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export default function Map() {
  const [data, setData] = useState([]);
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
  const classes = useStyles();

  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const res = await axios("https://alin-ua-api.herokuapp.com/categories");

    setCategories(res.data);
  }, []);

  useEffect(async () => {
    const result = await axios("https://alin-ua-api.herokuapp.com/places");

    setData(result.data);
  }, []);

  const fetchData = async (e) => {
    const response = await axios.get(
      `https://alin-ua-api.herokuapp.com/categories/${e.target.textContent}`
    );

    setData(response.data.places);
  };

  return (
    <div>
      <Sidebar />
      <Grid container spacing={0}>
        <Grid container item xs={12} sm={2} md={2} spacing={0}>
          <div className={classes.root}>
            <>
              <Paper className={classes.paper}>
                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  {categories.map((categori) => (
                    <Button
                      data-val={categori.slug}
                      onClick={fetchData}
                      key={categori.id}
                    >
                      {categori.title}
                    </Button>
                  ))}
                </ButtonGroup>
              </Paper>
            </>
          </div>
        </Grid>
        <Grid xs={10}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container justify="center">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                    imgUrl={item.photo.url}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
