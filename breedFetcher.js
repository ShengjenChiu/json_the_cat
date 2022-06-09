/*
node breedFetcher.js Chartreux
The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.
*/

const args = process.argv;
const arg = args.slice(2, 3);
const request = require('request');
let bre = arg[0];
let query = `?q=${bre}`;
const url = "https://api.thecatapi.com/v1/breeds/search" + query;

request(url, (error, response, body) => {
  if (error) {
    return (console.log('Error:', error));
  }

  let sQ = response.statusCode;
  
  if (bre === undefined) {
    let bre = [];
    return console.log(bre);
  }

  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  let des = data[0];

  if (des === undefined) {
    return (console.log(`The breed ${bre} is not found.`));
  }

  if (sQ === 200) {
    return (console.log(`Description of the requeseted breed ${bre}: ${des.description}`));
  }

});
