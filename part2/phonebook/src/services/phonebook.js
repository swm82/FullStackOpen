import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const deletePerson = id => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
}

const update = (id, person) => {
    const request = axios.put(`http://localhost:3001/persons/${id}`, person)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, update }