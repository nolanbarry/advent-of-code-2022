import { readInput, sum } from "../utils";

const ROCK = Symbol('rock');
const PAPER = Symbol('paper');
const SCISSORS = Symbol('scissors');
type Shape = typeof ROCK | typeof PAPER | typeof SCISSORS

const letterMap = {
  A: ROCK,
  X: ROCK,
  B: PAPER,
  Y: PAPER,
  C: SCISSORS,
  Z: SCISSORS,
} as const

const valueMap = {
  [ROCK]: 1,
  [PAPER]: 2,
  [SCISSORS]: 3,
} as const

const beats = {
  [ROCK]: SCISSORS,
  [PAPER]: ROCK,
  [SCISSORS]: PAPER
} as const

function valueOf(them: Shape, me: Shape) {
  if (beats[them] == me) return 0
  if (them == me) return 3
  return 6
}

const input = readInput(2)

const rounds = input.map(round => round.split(' ').map(letter => letterMap[letter as keyof typeof letterMap]))
const scores = rounds.map(([them, me]) => valueMap[me] + valueOf(them, me))
const result = sum(scores)
console.log(result)
