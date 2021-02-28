import styles from "./Map.module.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import MapSidebar from "../../components/MapSidebar";

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios("https://alin-ua-api.herokuapp.com/places");

    setData(result.data);
  }, []);

  return (
    <div>
      <Sidebar />
      <Grid container spacing={0}>
        <Grid container item xs={12} sm={2} md={2} spacing={0}>
          <MapSidebar />
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
