import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9a73d69917973b21efae4acb31a16ee144ea41c7a2459233806c2facd1aea8d2'
    }
});