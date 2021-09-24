import axios from 'axios'
const BASE_URL = '/api/login/'

const login = async credentials => {
  const { data } = await axios.post(BASE_URL, credentials)
  return data
}

export default { login }
