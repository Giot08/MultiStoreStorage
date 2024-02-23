import axios from 'axios';
import countryList from './countries.json';
import provinceList from './provinces.json';

import { useStoreStorage } from '../stores/storeStore.js';
const useStore = useStoreStorage();

let rowsSaved = 0;

const api = {
  url: 'http://localhost:3000',
  get_stores: '/store/show_all',
  create: '/store/create',
  head: {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
};

export const loadStores = async (instance) => {
  instance.isLoadingStores = true;
  try {
    const res = await axios.get(`${api.url}${api.get_stores}`);
    instance.stores = await res.data;
    instance.isLoadingStores = false;
  } catch (error) {
    instance.isLoadingStores = false;
  }
};

export const createStore = async (arr, isImport, importsize) => {
  try {
    const {
      state,
      address,
      city,
      country,
      manager_email,
      domain,
      store_email,
      latitude,
      longitude,
      name,
      province,
      phone,
      zip_code
    } = arr;
    if (name === '') alert('Enter a store name');
    if (state === null) alert('Enter the state of this store');
    if (phone === null) alert('Enter the phone of this store');
    if (country === null) alert('Enter the country of this store');
    if (province === null) alert('Enter the province of this store');
    if (city === null) alert('Enter the city of this store');
    if (address === null) alert('Enter the address of this store');
    if (store_email === null) alert('Enter the shop email of this store');
    if (manager_email === null) alert('Enter the manager email of this store');
    const countryCode = () => {
      return countryList.filter((x) => x.name === country)[0].code;
    };
    const provinceCode = () => {
      return provinceList.filter((x) => x.name === province)[0].code;
    };
    const body = {
      active: state === 'Active' ? true : false,
      address,
      city,
      country,
      country_code: countryCode(),
      manager_email,
      domain: domain || '',
      store_email,
      latitude: Number(latitude) || undefined,
      longitude: Number(longitude) || undefined,
      name,
      phone,
      province,
      province_code: provinceCode(),
      zip: zip_code || undefined
    };
    await axios.post(`${api.url}${api.create}`, body, api.head);
    if (isImport) {
      rowsSaved++;
      if (rowsSaved === importsize) location.reload();
      return { response: { status: 200 } };
    } else {
      await loadStores(useStore);
    }
  } catch (error) {
    console.error(error);
    if (isImport) return error;
  }
};

export const importStores = (data) => {
  if (!data.import_file) return;
  const file = data.import_file[0];
  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = async () => {
    const rows = reader.result.split('\n');
    const keys = rows[0].split(',');
    if (keys.length != 13) return alert('File with invalid columns.');
    for (let i = 1; i <= rows.length; i++) {
      const mapper = [];
      const row = rows[i].split(',');
      const rowSize = row.length;
      for (let j = 0; j < rowSize; j++) {
        const key = keys[j].trim();
        const value = row[j].trim();
        mapper.push([key, value]);
      }
      const store = Object.fromEntries(mapper);
      const { response } = await createStore(store, true, rows.length - 1);
      if (response.status === 400) {
        alert(response.data.error, 'Solve this problem to upload correctly your file.');
        break;
      }
    }
  };

  reader.onerror = function () {
    alert(reader.error);
  };
};
