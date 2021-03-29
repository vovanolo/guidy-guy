import styles from "./Map.module.css";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import urls from "../../urls";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function Map() {
  const [data, setData] = useState([]);
  let [inc, setInc] = useState(0);
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
    link: {
      textDecoration: "none",
    },
  }));
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryLoad, setCategoryLoad] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(async () => {
    setCategoryLoad(true);
    const res = await axios("https://alin-ua-api.herokuapp.com/categories");
    setCategoryLoad(false);
    setCategories(res.data);
  }, []);
  useEffect(async () => {
    setLoading(true);
    if (currentCategory === 0) {
      const res = await axios("https://alin-ua-api.herokuapp.com/places/count");
      const result = await axios(
        `https://alin-ua-api.herokuapp.com/places?_start=${inc}&_limit=1`
      );
      setData(result.data);
      setCount(res.data - 1);
      setLoading(false);
    } else {
      const res = await axios(
        `https://alin-ua-api.herokuapp.com/places/count?_where[category]=${currentCategory}`
      );
      const result = await axios(
        `https://alin-ua-api.herokuapp.com/places?_where[category]=${currentCategory}&_start=${inc}&_limit=1`
      );
      setData(result.data);
      setCount(res.data - 1);
      setLoading(false);
    }
  }, [inc, currentCategory]);

  const fetchData = async (e) => {
    // setLoading(true);
    setInc(0);
    setCurrentCategory(parseInt(e.currentTarget.value));
    // const response = await axios.get(
    //   `https://alin-ua-api.herokuapp.com/places?_where[category]=${e.currentTarget.value}&_start=${inc}&_limit=1`
    // );

    // setData(response.data);
  };
  const fetchAllData = async () => {
    // setLoading(true);
    setInc(0);
    setCurrentCategory(0);
    const res = await axios(
      `https://alin-ua-api.herokuapp.com/places?_start=${inc}&_limit=1`
    );

    setData(res.data);
  };

  const PagerDown = function () {
    // setLoading(true);
    setInc(inc - 1);
    if (inc < 0) {
      // setLoading(false);
      setInc(0);
      return;
    }
  };
  const PagerUp = function () {
    if (inc >= count) {
      setInc(count);
      return;
    } else {
      setInc(inc + 1);
    }
  };

  // console.log(`${data[0].item.name + "_" + localStorage.getItem("lang")}`);
  // let name = concat(data[0].name);

  return (
    <div>
      <Sidebar />
      <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
      <div>
        <button onClick={PagerDown}>Prev</button>
        <button onClick={PagerUp}>Next</button>
      </div>
      <Grid container spacing={0}>
        <Grid container item xs={12} sm={2} md={2} spacing={0}>
          <div className={classes.root}>
            <>
              <Paper className={classes.paper}>
                {categoryLoad ? (
                  <CircularProgress />
                ) : (
                  <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                  >
                    <Button onClick={fetchAllData}>ALL</Button>
                    {categories.map((categori) => (
                      <Button
                        key={categori.slug}
                        value={categori.id}
                        onClick={fetchData}
                      >
                        {categori.title}
                      </Button>
                    ))}
                  </ButtonGroup>
                )}
              </Paper>
            </>
          </div>
        </Grid>
        <Grid xs={10}>
          <Grid container>
            <Grid item xs={12}>
              {loading ? (
                <Grid container justify="center">
                  <CircularProgress />
                </Grid>
              ) : (
                <Grid container justify="center">
                  {data.map((item) => (
                    <Link
                      key={item.id}
                      to={`${urls.map}/${item.slug}`}
                      className={classes.link}
                    >
                      <Card
                        name={item[`name_${i18n.language}`]}
                        desc={item[`desc_${i18n.language}`]}
                        imgUrl={item.photo.url}
                      />
                    </Link>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
