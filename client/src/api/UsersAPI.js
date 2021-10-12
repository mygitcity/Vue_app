import HttpClient from './BaseAPI'

export default {
  craete: (data) => HttpClient.client.post('users', data),
  confirmId: (userId) => HttpClient.client.get(`users/${userId}`)
}
