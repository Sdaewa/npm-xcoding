"use strict";
const fs = require("fs");

// Encoding Base64 Strings with Node.js

const encode = (str) => {
  let data = str;
  let buff = Buffer.from(data);
  let base64data = buff.toString("base64");

  console.log(`"${data}" converted to Base64 is "${base64data}"`);
  return base64data;
};

// Decoding Base64 Strings with Node.js

const decode = (str) => {
  let data = str;
  let buff = Buffer.from(data, "base64");
  let text = buff.toString("ascii");

  console.log(`"${data}" converted from Base64 to ASCII is "${text}"`);
  return text;
};

// Encoding Binary Data to Base64 Strings

const encodeBinary = (path) => {
  let buff = fs.readFileSync(path);
  let base64data = buff.toString("base64");

  console.log("File converted to base64 is:\n\n" + base64data);
};

// Decoding Base64 Strings to Binary Data

const decodeBinary = (data) => {
  let data = data;

  let buff = Buffer.from(data, "base64");
  fs.writeFileSync("stack-abuse-logo-out.png", buff);

  console.log("Base64 data converted to file");
};

module.exports = { encode, decode, encodeBinary, decodeBinary };
