const http = require("https");

const app_id = "4629a988"; // insert your APP Id
const app_key = "2286e5089e111351cc2caa3fddfa2cd1"; // insert your APP Key
const wordId = "ace";
const fields = "pronunciations";


const strictMatch = "false";

const options = {
  host: 'od-api.oxforddictionaries.com',
  port: '443',
  path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
  method: "GET",
  headers: {
    'app_id': app_id,
    'app_key': app_key
  }
};

http.get(options, (resp) => {
    let body = '';
    resp.on('data', (d) => {
        body += d;
    });
    resp.on('end', () => {
        let parsed = JSON.stringify(body);

        console.log(parsed);
    });
});