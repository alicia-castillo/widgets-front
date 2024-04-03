import axios from 'axios'

const BASE_URL = 'http://localhost:9000'

export const fetchAllWidgets = () => axios.get(`${BASE_URL}/v1/widgets`).then((response) => response.data);

export const DeleteWidget = (name) => axios.delete(`${BASE_URL}/v1/widgets/${name}`).then((response) => response.data);

export const addNewWidget = (widget) => axios.post(`${BASE_URL}/v1/widgets/addWidget`, widget).then((response) => response.data);

export const editWidget = (name, widget) => axios.put(`${BASE_URL}/v1/widgets/${name}`, widget).then((response) => response.data);

export const getById = (name) => axios.get(`${BASE_URL}/v1/widgets/${name}`).then((response)=>response.data);
