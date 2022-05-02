import axios from '../utils/config/axios.config'

/**
 * Login method
 * @param {string} email to login a user
 * @param {string} password to login a user
 * @returns 
 */
export const login = (email: string, password: string) => {

  // Body to POST
  const body = {
    email: email,
    password: password
  }

  // Send POST Request to login endpoint (http://localhost:8000/api/auth/login)
  return axios.post('/auth/login', body)

}

/**
 * Register method
 * @param {string} name of user
 * @param {string} email of user 
 * @param {string} password of user
 * @param {number} age of user
 * @returns 
 */
export const register = (name: string, email: string, password: string, age: number) => {

  // Body to POST
  const body = {
    name: name,
    email: email,
    password: password,
    age: age
  }

  // Send POST to request to register endpoint(http://localhost:8000/api/auth/register)
  return axios.post('/auth/register', body)

}