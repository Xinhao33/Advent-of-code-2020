import * as fs from "fs";

function day2(input: any[]) {
  var acceptable = 0;
  for (let e of input) {
    e = e.trim().split(" ").map(String);
    const list_num = e[0].trim().split("-").map(String);
    const first = parseInt(list_num[0]);
    const last = parseInt(list_num[1]);
    const letter: String = e[1][0];
    const chaine = e[2];
    var num = 0;
    if (num >= first && num <= last) {
      acceptable += 1;
    }
  }
  return acceptable;
}

function day02(input: any[]) {
  var acceptable = 0;
  for (let e of input) {
    e = e.trim().split(" ").map(String);
    const list_num = e[0].trim().split("-").map(String);
    const first = parseInt(list_num[0]);
    const last = parseInt(list_num[1]);
    const letter: String = e[1][0];
    const chaine = e[2];
    if (chaine[first - 1] === letter && chaine[last - 1] != letter) {
      acceptable += 1;
    } else if (chaine[first - 1] != letter && chaine[last - 1] === letter) {
      acceptable += 1;
    }
  }
  return acceptable;
}
var test = new Array();
test = ["1-3 a: aac", "1-3 b: bccccc", "2-9 c: cccccccccc", "6-7 c: xkdzcscg"];

["input2.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  console.log(`${f} - day01: ${day02(input)}`);
  console.log(`${f} - day02: ${day02(input)}`);
  //console.log(input);
});
console.log(day02(test));
