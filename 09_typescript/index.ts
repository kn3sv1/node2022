import axios from 'axios';

//$ npx tsc --build tsconfig.json && node index.js

//$ tsc --build tsconfig.json && node index.js

//$ tsc   && node index.js

// $ tsc --build tsconfig.json && node index.js


// https://www.npmjs.com/package/ts-node

// ts-node index.ts


// не работает
// const axios = require('axios');


type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

async function getUsers() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      'https://reqres.in/api/users',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.log('error message: ', error.message);
    //   return error.message;
    // } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    // }
  }
}

getUsers();


// axios.get('https://reqres.in/api/users').then( response => {
//     console.log(response.data);
//     console.log(response.status);
// })


// npm install -g typescript 
// npm install axios

// User@DESKTOP-H86Q8JU MINGW64 /e/projects/nodejs/09_typescript (master)
// $ npm install axios --global


// tsc --init