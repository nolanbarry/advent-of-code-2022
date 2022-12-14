import { readInput, sum , max, split} from "../utils";

const input = readInput(1)

const elves: number[][] = split(input, "").map(snacks => snacks.map(Number))

const result = max(elves.map(sum))
console.log(result)