import * as fs from "fs";

type coord = {
  x: number;
  y: number;
};

const start: coord = {
  x: 0,
  y: 0,
};

let increment = (p: coord, index: coord) => {
  return { x: p.x + index.x, y: p.y + index.y };
};

const path = (p: coord, input: any[], index: coord) => {
  let output = [];
  const lengthX = input[0].length;
  //console.log(input.length);
  while (p.y < input.length) {
    output.push(input[p.y][p.x]);
    //console.log(input[p.y][p.x]);
    p = increment(p, index);
    p.x = p.x % lengthX;
    //console.log(p);
  }
  return output;
};

const count = (input: any[]) => {
  let cont = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "#") {
      cont += 1;
    }
  }
  return cont;
};

["inputDay3.1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  //console.log(input[0][1]);
  //console.log(path(start, input));
  const index: coord = {
    x: 3,
    y: 1,
  };
  const first = count(path(start, input, index));
  console.log(first);
  index.x = 1;
  const seconde = count(path(start, input, index));
  index.x = 5;
  const third = count(path(start, input, index));
  index.x = 7;
  const fourth = count(path(start, input, index));
  index.x = 1;
  index.y = 2;
  const fifth = count(path(start, input, index));
  console.log(first * seconde * third * fourth * fifth);
});
