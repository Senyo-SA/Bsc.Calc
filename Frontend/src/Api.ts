import axios from 'axios'


// create axios instance with backend url
const api = axios.create({
    baseURL: "http://localhost:8000"
})

// export axios instance

export default api