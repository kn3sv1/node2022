
const axios = require('axios');
//import axios from 'axios';

// axios.get('http://webcode.me').then(resp => {

//     console.log(resp.data);
// });



axios.get('https://reqres.in/api/users').then( response => {
    console.log(response.data);
    console.log(response.status);
})