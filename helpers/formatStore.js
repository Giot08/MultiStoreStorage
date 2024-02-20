class Store {
  constructor(
    active,
    address,
    city,
    country,
    country_code,
    manager_email,
    domain,
    store_email,
    latitude,
    longitude,
    name,
    phone,
    province,
    province_code,
    zip,
  ) {
    this.active = Boolean(active);
    this.address = address;
    this.city = city;
    this.country = country;
    this.country_code = country_code;
    this.manager_email = manager_email;
    this.domain = domain;
    this.store_email = store_email;
    this.latitude = parseFloat(latitude) || null;
    this.longitude = parseFloat(longitude) || null;
    this.name = name;
    this.phone = phone;
    this.province = province;
    this.province_code = province_code;
    this.zip = Number(zip) || null;
  }
}

export const StoreClass = (data) => {
  const {
    active,
    address,
    city,
    country,
    country_code,
    manager_email,
    domain,
    store_email,
    latitude,
    longitude,
    name,
    phone,
    province,
    province_code,
    zip,
  } = data;

  const store = new Store(
    active,
    address,
    city,
    country,
    country_code,
    manager_email,
    domain,
    store_email,
    latitude,
    longitude,
    name,
    phone,
    province,
    province_code,
    zip,
  );
  return store;
};
