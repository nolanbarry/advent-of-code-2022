import fs from 'fs';

export const readInput = (day: number, trim = true): string[] => fs.readFileSync(`day-${day}/input.txt`, 'utf-8').split('\n').map(line => trim ? line.trim() : line)
export const sum = (list: number[]) => list.reduce((sum, next) => sum + next, 0)
export const max = (list: number[]) => list.reduce((best, next) => best > next ? best : next)
export const sort = (list: number[], ascending = true) => list.sort((a, b) => ascending ? b - a : a - b)
export const intersection = <T>(a: Set<T>, b: Set<T>) => new Set(Array.from(a).filter(element => b.has(element)))
export const split = <T>(array: T[], separator: T | ((item: T) => boolean), includeSeparator = false) => {
  const result: T[][] = [[]]
  const separatorFunction = typeof separator == 'function' ?
    separator as (item: T) => boolean :
    (item: T) => item == separator
  array.forEach(value => {
    const isSeparator = separatorFunction(value)
    if (isSeparator && result.at(-1)!.length != 0) result.push([])
    if (!isSeparator || includeSeparator) result.at(-1)!.push(value)
  })
  return result
}
export const boundsChecker = (width: number, height: number) => {
  return (row: number, column: number) => {
    return row >= 0 && row < height && column >= 0 && column < width
  }
}