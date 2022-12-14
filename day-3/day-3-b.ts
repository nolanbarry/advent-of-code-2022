import { intersection, readInput, sum } from "../utils"

const priorityOf = (letter: string) => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter) + 1
const input = readInput(3)

const groups = Array.from({ length: input.length / 3 }).map((_, index) => input.slice(index * 3, (index + 1) * 3).map(sack => new Set(sack.split(''))))
const overlap = groups.map(([a, b, c]) => intersection(intersection(a, b), c).values().next().value)
const priorities = overlap.map(priorityOf)
const result = sum(priorities)
console.log(result)
