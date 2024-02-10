import express from "express";

const mainRoutes = express.Router();

mainRoutes.get("/", (req, res) => {
  res.json({
    msg: "Server up",
  });
});

export default mainRoutes;