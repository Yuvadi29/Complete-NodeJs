const fs = require('fs');

fs.readFile('./new.txt', 'utf8', (err, data) => {
    console.log(data);
    if (err) console.log(err);
});

fs.writeFile('./new1.txt', 'Hi Hello', (err, data) => {
    console.log(data);
    if (err) console.log(err);
});

fs.appendFile('./new.txt', '\nHello Again', (err, data) => {
    console.log(data);
    if (err) console.log(err);
});

fs.unlink('./new1.txt', (err, data) => {
    if (err) console.log(err);
    console.log('File Deleted Successfully: ');
})