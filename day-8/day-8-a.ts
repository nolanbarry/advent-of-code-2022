import { boundsChecker, readInput } from "../utils";


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

function visible(row: number, column: number, direction: typeof DIRECTION[number]) {
  const slice: number[] = []
  const step = () => { row += direction[0]; column += direction[1]}
  const treeHeight = trees[row][column]
  step()
  while(boundsCheck(row, column)) {
    slice.unshift(trees[row][column])
    step()
  }
  return slice.every((value) => value < treeHeight)
}

let numberOfVisibleTrees = 0
for (let row = 0; row < height; row++) {
  for (let col = 0; col < width; col++) {
    numberOfVisibleTrees += DIRECTION.some((dir) => visible(row, col, dir)) ? 1 : 0
  }
}

console.log(numberOfVisibleTrees)