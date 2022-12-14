import { readInput, sum , max} from "../utils";

const input = readInput(1)

const elves: number[][] = [[]]

input.forEach(calories => calories ? elves.at(-1)!.push(Number(calories)) : elves.push([]) )

console.log(max(elves.map(sum)))