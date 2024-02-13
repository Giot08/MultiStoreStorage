import express from "express";

import { storeMain } from '../../controller/stores.js'

const storeRoutes = express.Router();

storeRoutes.get("/store", storeMain)

storeRoutes.get("/store/import", (req, res) => {
  res.json({
    msg: "Store import route",
  });
});
storeRoutes.get("/store/create", (req, res) => {
  res.json({
    msg: "Store create route",
  });
});

export default storeRoutes;