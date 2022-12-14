import { readInput, split } from "../utils";

const input = readInput(5, false)

const [drawing, instructions] = split(input, "")

// total width of string = (width * 3) + (width - 1)
// w = (t + 1) / 4
const width = (drawing.at(-1)!.length + 1) / 4
const height = drawing.length - 1
const map = Array.from({ length: width }).map((_, x) => Array.from({ length: height }).map((_, y) => drawing[y][(x * 4) + 1]))
const stacks = map.map(stack => stack.join("").trim().split("").reverse())

for (let instruction of instructions) {
  const [amount, from, to] = instruction.split(" ").map(Number).filter(x => !isNaN(x))
  for (let i = 0; i < amount; i++) {
    stacks[to - 1].push(stacks[from - 1].pop()!)
  }
}

const result = stacks.map(stack => stack.at(-1)).join("")

console.log(result)
