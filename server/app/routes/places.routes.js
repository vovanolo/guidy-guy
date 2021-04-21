module.exports = (app) => {
  const places = require("../controllers/places.controller.js");

  app.post("/places", places.create);

  app.get("/places", places.findAll);

  app.get("/places/:placeId", places.findOne);

  app.put("/places/:placeId", places.update);

  // app.delete("/places/:placeId", places.delete);

  // app.delete("/places", places.deleteAll);
};
