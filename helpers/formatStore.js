class Store {
  constructor(
    active,
    address,
    city,
    country,
    country_code,
    owner_email,
    currency,
    domain,
    main_email,
    latitude,
    longitude,
    name,
    province,
    province_code,
    shop_owner,
    zip
  ) {
    this.active = Boolean(active);
    this.address = address;
    this.city = city;
    this.country = country;
    this.country_code = country_code;
    this.owner_email = owner_email;
    this.currency = currency;
    this.domain = domain;
    this.main_email = main_email;
    this.latitude = parseFloat(latitude);
    this.longitude = parseFloat(longitude);
    this.name = name;
    this.province = province;
    this.province_code = province_code;
    this.shop_owner = shop_owner;
    this.zip = Number(zip);
  }

  data() {
    console.log(`    
        ${this.active} = Boolean(active); \n
        ${this.address} = address; \n
        ${this.city} = city; \n
        ${this.country} = country; \n
        ${this.country_code} = country_code; \n
        ${this.owner_email} = owner_email; \n
        ${this.currency} = currency; \n
        ${this.domain} = domain; \n
        ${this.main_email} = main_email; \n
        ${this.latitude} = parseFloat(latitude); \n
        ${this.longitude} = parseFloat(longitude); \n
        ${this.name} = name; \n
        ${this.province} = province; \n
        ${this.province_code} = province_code; \n
        ${this.shop_owner} = shop_owner; \n
        ${this.zip} = Number(zip);
    `);
  }
}

export const StoreClass = (data) => {
  const {
    active,
    address,
    city,
    country,
    country_code,
    owner_email,
    currency,
    domain,
    main_email,
    latitude,
    longitude,
    name,
    province,
    province_code,
    shop_owner,
    zip,
  } = data;

  const store = new Store(
    active,
    address,
    city,
    country,
    country_code,
    owner_email,
    currency,
    domain,
    main_email,
    latitude,
    longitude,
    name,
    province,
    province_code,
    shop_owner,
    zip,
  );

  return store;
};
