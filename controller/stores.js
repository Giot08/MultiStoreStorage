//Dependencies
import { check, validationResult } from 'express-validator';
//Models
import Store from '../models/store.js';
import { validateCreateStore } from './validations/storeValidatons.js';
// Store Controllers CRUD

export const storeMain = async (req, res) => {
  try {
    res.status(200).json({ msg: 'Store Controller up' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const createStore = async (req, res) => {
  try {
    const isValidated = await validateCreateStore(req);
    if(isValidated !== true) return res.status(400).json(isValidated);
    res.status(200).json({ msg: 'Store Controller up' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
