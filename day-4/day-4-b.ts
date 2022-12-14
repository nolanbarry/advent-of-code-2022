import { readInput } from "../utils";

const input = readInput(4)
const pairs = input.map(pair => pair.split(',').map(assignment => assignment.split('-').map(Number))) as [[number, number], [number, number]][]
const inRange = (value: number, start: number, end: number) => start <= value && end >= value
const overlappingPairs = pairs.filter(([a, b]) => inRange(a[0], ...b) || inRange(a[1], ...b) || inRange(b[0] , ...a) || inRange(b[1], ...a))
console.log(overlappingPairs.length)