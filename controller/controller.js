//Dependencies
import { check, validationResult } from "express-validator";
//Models
import Store from "../models/Store.model.js";
// Store Controllers CRUD
const createStore = async (req, res) => {
  try {
    await check("name")
      .notEmpty()
      .withMessage("Define el nombre de la tienda.")
      .run(req);
    let resultErrors = validationResult(req);
    if (!resultErrors.isEmpty()) {
      return res.status(400).json(resultErrors.array());
    }

    const { name } = req.body;

    const isStoreDuplicated = await Store.findOne({
      where: { name: name },
    });
    if (isStoreDuplicated) {
      return res.status(400).json({
        msg: `La tienda: ${name}, ya existe en la BD`,
      });
    }
    const store = await Store.create(req.body);
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
};
