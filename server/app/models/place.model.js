const sql = require("./db.js");

// constructor
const Place = function (place) {
  this.name = place.name;
  this.description = place.description;
};

Place.create = (newPlace, result) => {
  sql.query("INSERT INTO places SET ?", newPlace, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created place: ", { id: res.insertId, ...newPlace });
    result(null, { id: res.insertId, ...newPlace });
  });
};

Place.findById = (placeId, result) => {
  sql.query(`SELECT * FROM places WHERE id = ${placeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found place: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Place.getAll = (result) => {
  sql.query("SELECT * FROM places", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("places: ", res);
    result(null, res);
  });
};

Place.updateById = (id, place, result) => {
  sql.query(
    "UPDATE places SET email = ?, name = ?, active = ? WHERE id = ?",
    [place.name, place.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated places: ", { id: id, ...place });
      result(null, { id: id, ...place });
    }
  );
};

Place.remove = (id, result) => {
  sql.query("DELETE FROM places WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted place with id: ", id);
    result(null, res);
  });
};

Place.removeAll = (result) => {
  sql.query("DELETE FROM places", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Place;
