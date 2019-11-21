import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9c1ab.firebaseio.com/'
});

export default instance;