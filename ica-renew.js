// Mot Ica's inofficiella Api handla.api.ica.se






var request = require('request');
const fs = require('fs');
var options = {
    url: 'https://handla.api.ica.se/api/login/', //Logga in mot handla.api.ica.se
    auth: {
        'user': 'xxxxxxxxxx', // personnummer (10) siffror tex 700102030405
        'pass': 'xxxxxx'     //lösenord som används på ica.se för att logga in på sitt kundkonto
    }
};

async function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); //Visa kundbild
      
        
    }
}
var request = require('request'); // Auticket erhålls med postman alternativt curl ( curl -i -u xxxxxxxxxx:xxxxxx https://handla.api.ica.se/api/login/ med login detaljer

var headers = {curl -i -u 7001011234:567 https://handla.api.ica.se/api/login/
    'AuthenticationTicket': 'klista in din ticket här'
};

var options = {
    url: 'https://handla.api.ica.se/api/user/minbonustransaction',// Alla köp som gjorts som ger ica bonus.
    headers: headers
};

 async function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        let data = JSON.stringify(body);
        fs.writeFileSync('./bonus.json',data);  //Sparas till en jsonfil för mer bearbetning
        

    }
}

request(options, callback);




