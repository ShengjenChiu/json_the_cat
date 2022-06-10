// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Chartreux', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "Description of the requeseted breed Chartreux: The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('return an error message when an invalid/non-existent breed is passed in, via callback', (done) => {
    fetchBreedDescription('Siberians', (err, desc) => {
      // we expect error for this scenario
      assert.equal(null, error);

      const expectedDesc = "Error fetch details: The breed Siberians is not found.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

});