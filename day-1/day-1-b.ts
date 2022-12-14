import { readInput, sum , sort} from "../utils";

const input = readInput(1)

const elves: number[][] = [[]]

input.forEach(calories => calories ? elves.at(-1)!.push(Number(calories)) : elves.push([]) )

const result = sum(sort(elves.map(sum)).slice(0, 3))
console.log(result)