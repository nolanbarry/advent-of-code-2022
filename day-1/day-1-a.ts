import { readInput, sum , max} from "../utils";

const input = readInput(1)

const elves: number[][] = [[]]

input.forEach(calories => calories ? elves.at(-1)!.push(Number(calories)) : elves.push([]) )

const result = max(elves.map(sum))
console.log(result)