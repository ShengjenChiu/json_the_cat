/*
node breedFetcher.js Chartreux
The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.
*/

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(`Error: ${error}`);
    }

    let sQ = response.statusCode;
    
    if (breedName === undefined) {
      let breedName = [];
      return callback(null, breedName);
    }
  
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    
    let parsedData = data[0];
    
    //console.log(parsedData);

    if (parsedData === undefined) {
      return callback(`The breed ${breedName} is not found.`);
    }
  
    if (sQ === 200) {
      return callback(null, `Description of the requeseted breed ${breedName}: ${parsedData.description}`);
    }
  
  });
};


module.exports = {
  fetchBreedDescription,
};
