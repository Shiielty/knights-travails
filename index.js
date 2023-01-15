// Create a board of n x n
const board = ((n = 8) => {
  const board = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board.push([i, j])
    }
  }

  return { board }
})()

// Knight function factory that return it's position, path to get there, and it's possible moves
const Knight = (coordinate, path = []) => {
  const _board = board.board
  const _minCoor = _board[0][0]
  const _maxCoor = _board[_board.length - 1][0]

  if (coordinate[0] < _minCoor ||
    coordinate[1] < _minCoor ||
    coordinate[0] > _maxCoor ||
    coordinate[1] > _maxCoor) {
    return null
  }

  const move1 = null
  const move2 = null
  const move3 = null
  const move4 = null
  const move5 = null
  const move6 = null
  const move7 = null
  const move8 = null

  return { coordinate, path, move1, move2, move3, move4, move5, move6, move7, move8 }
}

// return new coordinate for knight's moves
function newCoor (coordinate, n) {
  let [x, y] = coordinate
  switch (n) {
    case 1:
      x += 1
      y += 2
      break
    case 2:
      x -= 2
      y += 2
      break
    case 3:
      x -= 1
      y -= 2
      break
    case 4:
      x += 1
      y -= 2
      break
    case 5:
      x += 2
      y += 1
      break
    case 6:
      x -= 2
      y += 1
      break
    case 7:
      x -= 2
      y -= 1
      break
    case 8:
      x += 2
      y -= 1
      break
    default:
      break
  }
  return [x, y]
}

// function to check arrays equality
function arrayEquals (a, b) {
  return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
}

// find knight shortest move to destination using BFS algorithm
const knightMoves = (coordinate, destination) => {
  const queue = []
  let currentKnight = Knight(coordinate, [coordinate])

  queue.push(currentKnight)

  while (queue.length !== 0) {
    currentKnight = queue[0]
    const currentCoor = currentKnight.coordinate
    const currentPath = currentKnight.path

    if (arrayEquals(currentCoor, destination)) {
      break
    } else {
      for (let i = 1; i <= 8; i++) {
        queue[0]['move' + i] = Knight(newCoor(currentCoor, i), [...currentPath, newCoor(currentCoor, i)])
        if (queue[0][`move${i}`] !== null) {
          queue.push(queue[0][`move${i}`])
        }
      }
      queue.shift()
    }
  }

  return summary(currentKnight)
}

const summary = (knightObj) => {
  const shortestPath = knightObj.path
  const pathLength = shortestPath.length - 1

  console.log(`You made it in ${pathLength} moves! Here's your path:\n`)
  shortestPath.forEach(arr => {
    console.log(arr)
  })
}

knightMoves([3, 4], [7, 3])
