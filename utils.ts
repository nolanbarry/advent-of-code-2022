import fs from 'fs';

export const readInput = (day: number): string[] => fs.readFileSync(`day-${day}/input.txt`, 'utf-8').split('\n').map(line => line.trim())
export const sum = (list: number[]) => list.reduce((sum, next) => sum + next, 0)
export const max = (list: number[]) => list.reduce((best, next) => best > next ? best : next)
export const sort = (list: number[], ascending = true) => list.sort((a, b) => ascending ? b - a : a - b)
export const intersection = <T>(a: Set<T>, b: Set<T>) => new Set(Array.from(a).filter(element => b.has(element)))
export const split = <T>(array: T[], separator: T) => {
  const result: T[][] = [[]]
  array.forEach(value => value == separator ? result.push([]): result.at(-1)!.push(value))
  return result
}