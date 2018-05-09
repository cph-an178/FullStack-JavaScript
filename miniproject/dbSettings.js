const DB_URI = "mongodb://alex:123456@ds027505.mlab.com:27505/miniproject";
const TEST_DB_URI = "mongodb://test:test@ds119150.mlab.com:19150/miniproject-testing";

//default timeout for Mocha async tests
const MOCHA_TEST_TIMEOUT = 5000;


module.exports = {
  DB_URI,
  TEST_DB_URI,
  MOCHA_TEST_TIMEOUT
}