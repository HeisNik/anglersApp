import axios from 'axios'


const baseUrl = 'http://localhost:3003/api/login'

const userLogin = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { userLogin }
