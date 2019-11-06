//const process = require('process');
const fs = require('fs');
const path = require('path');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fileInputName = process.argv.slice(2)[0].toString();
const fileOutputName = process.argv.slice(2)[1].toString();

const pathToRead = path.join(__dirname,fileInputName);
const pathToWrite = path.join(__dirname,fileOutputName);

const fileIn = fs.readFileSync(pathToRead, 'utf-8');
const urls = fileIn.toString().split(/\r\n|\n| /);
//urls.splice(0, 1);

const https = require('https');
const responses = urls.map(url => {
    return new Promise((resolve, reject) => {
        https.get("https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=https://www.".concat(url), (response) => {
            console.log(' Sending request to' + url);
            fs.appendFileSync(pathToWrite,'[LOG]'
                .concat((new Date()).toString(),'\n\r Sending request to ',url,
                    " \n\rRequest finished with statusCode - ", response.statusCode,"\n\r\n\r"));
            resolve(response);
        }).on('error', (error) => reject(error));
    });
});

Promise.all(responses)
    .then( response =>{
    console.log('statusCode:'  + response.statusCode);
    fs.appendFileSync(pathToWrite, 'statusCode:'.concat(response.statusCode,"\n"));
    console.log(response.statusCode);
    })
    .catch(error =>{
        console.log(`Request finished with statusCode: ${e.statusCode}`);
        fs.appendFileSync(pathToWrite,`Request finished with statusCode: ${e.statusCode}`);
    });
