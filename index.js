
console.log('Hello World!')

//console.log(global.luckyNum);

//global.luckyNum = '23';

//console.log(global);

//console.log(proccess);

console.log(process.env.USER);

//ProcessingInstruction.on('exit', function)


const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})

eventEmitter.emit('lunch');


const { readFile, readFileSync } = require('fs');//similar to import

//const txt = readFileSync('./hello.txt', 'utf8'); //this is a blocking event
//console.log(txt);

const txt = readFile('./hello.txt', 'utf8', (err, txt) => {//non blocking
   console.log(txt)
}); 

console.log('Do this ASAP')


//promise based solution. Promises are asynchronous and non blocking

//const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log(txt)
// }

const myModule = require('./my-module');

console.log (myModule);


const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (request, response) => {

    readFile('./index.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    })
});


app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))