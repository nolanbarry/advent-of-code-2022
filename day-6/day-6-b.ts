import { readInput } from "../utils";

const input = readInput(6)

const stream = input[0]
const chunkLength = 14
let i = chunkLength
while(new Set(stream.slice(i-chunkLength, i)).size < chunkLength) i++
console.log(i)