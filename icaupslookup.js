var request = require('request');
const fs = require('fs');

var options = {
    url: 'https://handla.api.ica.se/api/upclookup?upc=7310751163903' /// Streckkod på vara som ska kollas upp
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        let data = JSON.stringify(body);
        fs.writeFileSync('./artikel.json',data);  // Sparar den hämtade artikel till en json file

    }
}

request(options, callback);
