import { check, validationResult } from 'express-validator';

export const validateCreateStore = async (req) => {
  await check('active').notEmpty().isBoolean().withMessage('Set the state you your store.').run(req);
  await check('address').notEmpty().isString().withMessage('Enter the store address.').run(req);
  await check('city').notEmpty().isString().withMessage('Enter the store city.').run(req);
  await check('country').notEmpty().isString().withMessage('Enter the store country.').run(req);
  await check('country_code').notEmpty().isString().withMessage('Enter the store country_code.').run(req);
  await check('owner_email').notEmpty().isString().withMessage('Enter the store owner email.').run(req);
  await check('currency').notEmpty().isString().withMessage('Enter the store currency.').run(req);
  await check('domain').notEmpty().isString().withMessage('Enter the store name.').run(req);
  await check('main_email').notEmpty().isString().withMessage('Enter the store main email.').run(req);
  await check('latitude').notEmpty().isFloat().withMessage('Enter the store latitude.').run(req);
  await check('longitude').notEmpty().isFloat().withMessage('Enter the store longitude.').run(req);
  await check('name').notEmpty().isString().withMessage('Enter the store name.').run(req);
  await check('province').notEmpty().isString().withMessage('Enter the store province.').run(req);
  await check('province_code').notEmpty().isString().withMessage('Enter the store province code.').run(req);
  await check('shop_owner').notEmpty().isString().withMessage('Enter the store shop owner.').run(req);
  await check('zip').notEmpty().isInt().withMessage('Enter the store zip.').run(req);
  let resultErrors = validationResult(req);
  if (resultErrors.array().length === 0) return true
  return resultErrors.array()
};
