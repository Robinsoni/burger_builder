import axios from 'axios'


const instance = axios.create({
    baseURL:'https://react-my-burger-45cd6.firebaseio.com/',
});

export default instance;