/** Command-line tool to generate Markov text. */
const fs = require("fs");
const {MarkovMachine} = require("./markov");
const axios = require("axios");

function generateText(text) {
    let m = new MarkovMachine(text);
    console.log(m.makeText());
}

function makeFileText(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log(`Cannot read file: ${path} : ${err}`)
            process.exit(1);
        } else {
            generateText(data);
        }
    });
}

async function makeURLText(url) {
    await axios.get(path)
    .then((res) => {
        generateText(res.data);
    })
    .catch((err) => {
        console.log(`Cannot read URL: ${url}: ${err}`);
    });
}

let method = process.argv[2];
let path = process.argv[3];

if (method === 'file') {
    makeFileText(path);
} else if (method === 'url') {
    makeURLText(path);
} else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}