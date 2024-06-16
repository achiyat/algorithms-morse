// morseCode.js

// Strategy Stages:
// ".... . -.--   .--- ..- -.. ." => Input
// [ '.... . -.--', '.--- ..- -.. .' ] => Split words
// [ [ 'H', 'E', 'Y' ], [ 'J', 'U', 'D', 'E' ] ] => translation letters
// [ 'HEY', 'JUDE' ] => join array
// "HEY JUDE" => Output

const MORSE_CODE = require("./dictMorse");

const decodeMorse = (morseCode) => {
  const split_words = morseCode.trim().split("   ");

  return split_words
    .map((word) =>
      word
        .split(" ")
        .map((char) => MORSE_CODE[char])
        .join("")
    )
    .join(" ");
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // HEY JUDE
