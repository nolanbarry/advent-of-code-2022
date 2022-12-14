import { readInput, sum , sort, split} from "../utils";

const input = readInput(1)

const elves: number[][] = split(input, "").map(snacks => snacks.map(Number))

const result = sum(sort(elves.map(sum)).slice(0, 3))
console.log(result)