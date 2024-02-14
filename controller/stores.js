//Models
import { StoreClass } from '../helpers/formatStore.js';
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
    if (isValidated !== true) return res.status(400).json(isValidated);

    const { address } = req.body;

    const isStoreDuplicated = await Store.findOne({
      where: { address }
    });

    if(isStoreDuplicated) return res.status(400).json({error: "You have already a store in that location"});
    const storeParse = StoreClass(req.body);
    const store = await Store.create(storeParse);
    const request = req.body
    
    res.status(200).json({ msg: 'Store added succesfully', store, request});
  } catch (error) {
    res.status(500).json({ error });
  }
};
