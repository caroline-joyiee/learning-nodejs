// const http = require('http')
//  http.createServer(function(req, res){
//     res.end('Hello Rachel')

//  }).listen(8030);


import {writeFile} from 'node:fs';

writeFile('./hello.html', '<h2>MY Future is Bright</h2>', () => {
   console.log('File Added');
});

console.log('Learning');