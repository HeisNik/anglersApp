import axios from 'axios'


const baseUrl = 'http://localhost:3003/api/users'

const userSignup = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { userSignup }
