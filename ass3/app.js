const fs = require('fs');

const filename = 'example.txt';
const content = 'Hello, world!';

fs.writeFile(filename, content, (err) => {
  if (err) throw err;
  console.log(`File ${filename} created.`);
  
  
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contents of ${filename}:`);
    console.log(data);
  });
});

