import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:7802/skills'
})