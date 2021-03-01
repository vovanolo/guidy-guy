import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PlaceInfo() {
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
      {/* <img src={place.photo.url} alt="" /> */}
      <h1>{place.name}</h1>
      <h2>{place.desc}</h2>
    </div>
  );
}
