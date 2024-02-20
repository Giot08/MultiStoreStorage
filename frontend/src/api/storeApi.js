import axios from 'axios'

const api = {
 url: 'http://localhost:3000',
 create: '/store/create'
}
export const createStore = async (body) => {
 const {
  store,
  state,
  phone,
  country,
  province,
  city,
  address,
  shop_email,
  manager_email,
  latitude,
  longitude,
  zip_code
 } = body

 if (store === '') {
  return alert('Enter a store name')
 }
 if (state === null) {
  return alert('Enter the state of this store')
 }
 if (phone === null) {
  return alert('Enter the phone of this store')
 }
 if (country === null) {
  return alert('Enter the country of this store')
 }
 if (province === null) {
  return alert('Enter the province of this store')
 }
 if (city === null) {
  return alert('Enter the city of this store')
 }
 if (address === null) {
  return alert('Enter the address of this store')
 }
 if (shop_email === null) {
  return alert('Enter the shop email of this store')
 }
 if (manager_email === null) {
  return alert('Enter the manager email of this store')
 }

 console.log(`${api.url}${api.create}`)

 const { data } = await axios.post(
  `${api.url}${api.create}`,
  {
   store,
   state,
   phone,
   country,
   province,
   city,
   address,
   shop_email,
   manager_email,
   latitude,
   longitude,
   zip_code
  },
  {
   headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
   }
  }
 )
 console.log(data);
}
