"use strict";

// Encoding Base64 Strings with Node.js

const encode = (str) => {
  let data = str;
  let buff = Buffer.from(data);
  let base64data = buff.toString("base64");
  console.log('"' + data + '" converted to Base64 is "' + base64data + '"');
  return base64data;
};

module.exports = { encode };
