import { readInput, sum } from "../utils";

const ROCK = Symbol('rock');
const PAPER = Symbol('paper');
const SCISSORS = Symbol('scissors');
type Shape = typeof ROCK | typeof PAPER | typeof SCISSORS

const WIN = Symbol('win')
const LOSE = Symbol('lose')
const TIE = Symbol('tie')
type Result = typeof WIN | typeof LOSE | typeof TIE

const letterMap = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
  X: LOSE,
  Y: TIE,
  Z: WIN
} as const

const valueMap = {
  [ROCK]: 1,
  [PAPER]: 2,
  [SCISSORS]: 3,
  [WIN]: 6,
  [TIE]: 3,
  [LOSE]: 0
} as const

const beats = {
  [ROCK]: SCISSORS,
  [PAPER]: ROCK,
  [SCISSORS]: PAPER
} as const

function valueOf(them: Shape, me: Result) {
  if (me == TIE) return valueMap[them]
  if (me == LOSE) return valueMap[beats[them]]
  return valueMap[([ROCK, PAPER, SCISSORS].filter(shape => ![them, beats[them]].includes(shape)) as [Shape])[0]]
}

const input = readInput(2)

const rounds = input.map(round => round.split(' ').map(letter => letterMap[letter as keyof typeof letterMap])) as [Shape, Result][]
const scores = rounds.map(([them, me]: [Shape, Result]) => valueMap[me] + valueOf(them, me))
const result = sum(scores)
console.log(result)
