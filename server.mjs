import {createServer} from 'node:http';
import {unlink, writeFile} from 'node:fs';


//Define request handler


// //create http server
//create http server
const server =  createServer(function requestHandler(req, res) {
    console.log(req.url);
    if (req.url.includes('create')){
        //Create File
        writeFile('joy.html', '<h1> File Added </h1>', () => {
        //Return Response
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('<h1>We have an HTTP Server</h1>');

        });
       
    }else{

            //Delete File
            unlink('./index.html', () => {

                //Return Response
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h2>File Deleted </h2>');
            })
    }
    
    
});


// Listen for incoming requests
server.listen(8000, '127.0.0.1', () => {
    console.log('server is running');
});


// //Normal function vs Arrow function
// function handleResquest() {}
// const handleResquest = () => {}

// //ananonymous function

// () => {}

// //const server =  createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('<h1>We have an HTTP Server</h1>');
// });

