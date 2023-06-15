# Not-so-useless

[![npm version](https://img.shields.io/npm/v/not-so-useless.svg)](https://www.npmjs.com/package/not-so-useless)

[![npm downloads](https://img.shields.io/npm/dt/not-so-useless.svg)](https://www.npmjs.com/package/not-so-useless)

A simple npm module that provides basic operations such as generating random numbers, removing spaces from strings, and retrieving the current date.

## Installation

```shell
npm install not-so-useless
```



## Description


### 👉 randomNumber()

Generates a random number between 0 and 1.
Returns: A random number.


### 👉 removeSpaces(input)

Removes all spaces from a string and replaces them with dashes.
Returns: The modified string with spaces replaced by dashes.

### 👉 todayDate()

Retrieves the current date.
Returns: The current date in the format 'MM/DD/YYYY'.


## Example

```
const { randomNumber, removeSpaces, todayDate } = require('my-basic-operations-module');

const number = randomNumber();
console.log(number); // 0.8775535436366

const input = 'Hello World!';
const modifiedInput = removeSpaces(input);
console.log(modifiedInput); // hello-world!

const date = todayDate();
console.log(date); //2023-08-22
```

Leveraged instruction from [Jamesqquick](https://www.jamesqquick.com/blog/how-to-create-and-publish-npm-packages/)
