const fetch = require('node-fetch');
// Refractoring??

// fetch returns a promise
let fetchAvatarUrl = async (userID) => {
  // 'await' converts the promise into an actual response
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userID}`);
  const data = await response.json();

  return data.imageUrl;
};

// Old implementation
// let fetchAvatarUrl = async (userID) => {
//   // return fetch(`https://catappapi.herokuapp.com/users/${userID}`)
//   //   .then(response => response.json())
//   //   .then(data => data.imageUrl)
// };

const result = fetchAvatarUrl(123);
result;
