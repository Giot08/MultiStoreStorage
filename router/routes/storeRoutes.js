import express from "express";

import { createStore, storeMain } from '../../controller/stores.js'

const storeRoutes = express.Router();

storeRoutes.get("/store", storeMain)

storeRoutes.post("/store/create",  createStore);

export default storeRoutes;