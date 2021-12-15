"use strict";

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

module.exports = { encode, decode };
