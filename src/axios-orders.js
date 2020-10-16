import axios from 'axios'


const instance = axios.create({
    baseURL:'https://reactapp-d3bb5.firebaseio.com',
});

export default instance;