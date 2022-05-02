import axios from 'axios'

export default axios.create(
  {
    baseURL: 'http://localhost:8000/api', // La base url será completada con los endpoints de nuestra app backend
    responseType: 'json',
    timeout: 6000
  }
)