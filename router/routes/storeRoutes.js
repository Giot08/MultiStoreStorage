import express from "express";

const storeRoutes = express.Router();

storeRoutes.get("/store", (req, res) => {
  res.json({
    msg: "Store up",
  });
});

export default storeRoutes;