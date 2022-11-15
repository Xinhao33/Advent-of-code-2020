import * as fs from 'fs';


function day01(input){
    for (const e of input){
        for (let i = 1; i < input.length;i++){
            else if(e+input[i]==2020){
                return e*input[i]
            }
        }
    }
}

function day02(input){
    for (const e of input){
        for (let i = 1; i < input.length;i++){
            for(let j=2;j<input.length;j++){
                if(e+input[i]+input[j]==2020){
                    return e*input[i]*input[j];
            }
            }
        }
    }
}
var test = new Array();
test = [1721,979,366,299,675,1456];
//console.log(day01(test));
console.log(day02(test));

['exemple1.in','puzzle1.in'].forEach((f) =>{
    const input = fs.readFileSync(`${f}`, 'utf-8')
    .trim()
    .split('\n')
    .map(Number);
    console.log(`${f} - day01: ${day01(input)}`);
    console.log(`${f} - day02: ${day02(input)}`);
    //console.log(input)
    
});