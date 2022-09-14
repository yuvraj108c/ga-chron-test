const fs = require("fs");

const data = fs.readFileSync("script_1.txt", "utf8");
console.log(`Data from script 1: ${data}`);
