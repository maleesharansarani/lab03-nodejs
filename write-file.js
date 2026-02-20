const fs = require('fs');

fs.writeFile('output.txt', 'This file was created using Node.js!', function (err) {
    if (err) throw err;
    console.log('File created successfully!');
});