# xcoding

xcoding is a Node.js package for dealing with types of data and files

## Installation

```bash
npm i xcoding
```

## Usage

```javascript
const {decode, encode, decodeBinary, encodeBinary} = require('xcoding');

// Encoding Base64 Strings

encode('Hello World!')
"Hello World!" converted to Base64 is "SGVsbG8gV29ybGQh"

// Decoding Base64 Strings

decode('SGVsbG8gV29ybGQh')
"SGVsbG8gV29ybGQh" converted from Base64 to ASCII is "Hello World!"


```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
