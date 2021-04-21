const Place = require("../models/place.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const place = new Place({
    name: req.body.name,
    description: req.body.description,
  });

  Place.create(place, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Place.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Place.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving places",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Place.findById(req.params.placeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found place with id ${req.params.placeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving place with id " + req.params.placeId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Customer.updateById(req.params.placeId, new Place(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Place with id ${req.params.placeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Place with id " + req.params.placeId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Place.updateById(req.params.placeId, new Place(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Place with id ${req.params.placeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Place with id " + req.params.placeId,
        });
      }
    } else res.send(data);
  });
};

// exports.deleteAll = (req, res) => {
//   Place.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all places.",
//       });
//     else res.send({ message: `All Places were deleted successfully!` });
//   });
// };
