const { userInfo } = require("os");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function decoder() {
  let changedInput = [];
  let result = "";
  rl.question("Please enter your sentence: ", (userInput) => {
    rl.question("please enter your shift number:", (number) => {
      for (const char of userInput) {
        const index = alphabet.findIndex((value) => value === char);

        if (index === -1) {
          changedInput.push("");
        } else {
          const newIndex =
            (index + Number(number) + alphabet.length) % alphabet.length;
          changedInput.push(alphabet[newIndex]);
        }
      }
      result = changedInput.map((c) => (c === "" ? " " : c)).join("");
      console.log(result);
      rl.close();
    });
  });
}
decoder();
