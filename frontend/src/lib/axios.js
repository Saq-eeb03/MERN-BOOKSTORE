import axios from "axios";
const api = axios.create({
    //baseURL:'http://localhost:3001'
    baseURL:'https://mern-bookstore-hy0g.onrender.com'
})
export default api
