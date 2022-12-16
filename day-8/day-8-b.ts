import { boundsChecker, max, multiplicativeSum, readInput, sum } from "../utils";


const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
] as [number, number][]

const input = readInput(8)
const trees = input.map(row => row.split('').map(digit => Number(digit)))
const [width, height] = [trees[0].length, trees.length]
const boundsCheck = boundsChecker(width, height)

function numTreesVisible(row: number, column: number, direction: typeof DIRECTION[number]) {
  const slice: number[] = []
  let steps = 0
  const step = () => { row += direction[0]; column += direction[1]; steps++ }
  const treeHeight = trees[row][column]
  step()
  while(boundsCheck(row, column) && trees[row][column] < treeHeight) {
    slice.unshift(trees[row][column])
    step()
  }
  if (!boundsCheck(row, column)) steps--
  return steps
}

const indices = Array.from({length: width}).map((_, col) => Array.from({length: height}).map((_, row) => [row, col])).flat()
const scores = indices.map(([row, col]) => multiplicativeSum(DIRECTION.map((dir) => numTreesVisible(row, col, dir))))
const result = max(scores)

console.log(result)