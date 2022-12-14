import { readInput } from "../utils";

const input = readInput(4)
const pairs = input.map(pair => pair.split(',').map(assignment => assignment.split('-').map(Number)))
const overlappingPairs = pairs.filter(([a, b]) => ((a[0] >= b[0]) == (a[1] <= b[1])) || ((a[0] <= b[0]) == (a[1] >= b[1])))
console.log(overlappingPairs.length)