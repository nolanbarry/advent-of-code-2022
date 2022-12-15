import { readInput } from "../utils";

const input = readInput(6)

const stream = input[0]
let i = 4
while(new Set(stream.slice(i-4, i)).size < 4) i++
console.log(i)