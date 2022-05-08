import { AxiosRequestConfig } from 'axios'
import axios from '../utils/config/axios.config'


export const getAllKatas = (token: string, limit?: number, page?: number) => {

  // Add headers with JWT in x-access-token
  const options: AxiosRequestConfig = {
    headers: {
      'x-access-token': token
    },
    params: {
      limit,
      page
    }
  }

  // GET a http://localhost:8000/api/katas?limit=1&page=1
  return axios.get('/katas', options)

}

export const getKataByID = (token: string, id: string) => {
 
  // Add headers with JWT in x-access-token
  const options: AxiosRequestConfig = {
    headers: {
      'x-access-token': token
    },
    params: {
      id
    }
  }

  // GET a http://localhost:8000/api/katas?id=xxxxxxx
  return axios.get('/katas', options)
}
