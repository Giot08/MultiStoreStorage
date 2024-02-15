import express from "express";

import { createStore, getStores, storeMain } from '../../controller/stores.js'

const storeRoutes = express.Router();

storeRoutes.get("/store", storeMain);

storeRoutes.get("/store/show_all", getStores);
storeRoutes.post("/store/create",  createStore);

export default storeRoutes;