import { intersection, readInput, sum } from "../utils"

const priorityOf = (letter: string) => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter) + 1
const input = readInput(3)

const rucksacks = input.map(rucksack =>
  [rucksack.substring(0, rucksack.length / 2), rucksack.substring(rucksack.length / 2)]
    .map(compartment => new Set(compartment.split('')))
) as [Set<string>, Set<string>][]
const overlap = rucksacks.map(([a, b]) => intersection(a, b).values().next().value)
const priorities = overlap.map(priorityOf)
const result = sum(priorities)
console.log(result)
