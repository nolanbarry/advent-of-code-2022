import { readInput, split, sum } from "../utils"

type Files = { name: string, size: number }[]

const allDirectories: Directory[] = []

class Directory {
  private name: string
  private files: Files = []
  directories: Record<string, Directory>
  size: number = 0
  constructor(name: string, parentDirectory?: Directory) {
    this.name = name
    this.directories = {}
    if (parentDirectory) this.directories['..'] = parentDirectory
    allDirectories.push(this)
  }
  addDirectory = (directory: Directory) => this.directories[directory.name] = directory
  addFile = (name: string, size: number) => this.files.push({ name, size })
  calculateSize = () => {
    const childDirectories = Object.entries(this.directories)
      .filter(([reference, directory]) => reference == directory.name)
      .map(([_, directory]) => directory)
    childDirectories.forEach(dir => dir.calculateSize())
    const filesSize = sum(this.files.map(file => file.size))
    const directoriesSize = sum(childDirectories.map(dir => dir.size))
    this.size = filesSize + directoriesSize
  }
}


const input = readInput(7)

// split into string[][], where each string[] is [command, ...output]
// also split each string into string[] on spaces, remove '$' from command
// and first command
const consoleOutput = split(input, (line) => line[0] == '$', true)
  .map(command => command.map(line => line.split(' ')))
  .map(([command, ...output]) => [command.slice(1), ...output])
  .slice(1)

let currentDir: Directory = new Directory('/')

for (let [command, ...output] of consoleOutput) {
  if (command[0] == 'cd') {
    const to = command[1]
    currentDir = currentDir.directories[to]
  } else if (command[0] == 'ls') {
    for (let [first, second] of output) {
      if (first == 'dir') {
        const directory = new Directory(second, currentDir)
        currentDir.addDirectory(directory)
      } else {
        let fileSize = Number(first)
        currentDir.addFile(second, fileSize)
      }
    }
  }
}

allDirectories[0].calculateSize()
const bigDirectories = allDirectories.filter(dir => dir.size <= 100000)
const result = sum(bigDirectories.map(dir => dir.size))

console.log(result)