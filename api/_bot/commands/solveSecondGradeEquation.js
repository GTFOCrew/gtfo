export default ctx => {
  const args = ctx.state.command.args
  if (args.length < 3) {
    return ctx.replyMessage(
      'Please, provide 3 numbers a, b and c in order to' +
        ' solve the 2nd grade equation `ax²+bx+c=0`'
    )
  }

  const a = parseFloat(args[0])
  const b = parseFloat(args[1])
  const c = parseFloat(args[2])

  if (a === 0 && b !== 0) {
    return ctx.replyMessage(
      `This is a 1st grade equation ${returnString(b)}x${returnString(
        c
      )}=0 and its solution is x=${c / b}`
    )
  } else if (a === 0 && b === 0 && c !== 0) {
    return ctx.replyMessage(`Bro wtf`)
  } else if (c === 0) {
    return ctx.replyMessage(`Bro you kidding, x=0 it's trivial...`)
  }

  const sol = computeSolution(a, b, c)

  const alsoImaginarySolution = typeof sol.sol1 === 'string' ? 'imaginary' : ''

  const basicMessage = `The solution to \`${returnString(a)}x²${returnString(
    b
  )}x${returnString(c)}=0\` equation is`

  if (isDoubleSolution(sol)) {
    return ctx.replyMessage(
      `${basicMessage} \`x=${sol.sol1}\` (double ${alsoImaginarySolution} solution)`
    )
  }

  return ctx.replyMessage(
    `${basicMessage} \`x1=${sol.sol1}\` and \`x2=${sol.sol2}\` ${alsoImaginarySolution}`
  )
}

const computeSolution = (a, b, c) => {
  if (b === 0) {
    const sol = Math.sqrt(c / a)
    return { sol1: sol, sol2: -sol }
  }
  const sqrt = Math.sqrt(b * b - 4 * a * c)
  if (isNaN(sqrt)) {
    return computeImaginarySolution(a, b, c)
  }
  return { sol1: (-b + sqrt) / (2 * a), sol2: (-b - sqrt) / (2 * a) }
}

const returnString = solution => {
  if (solution > 0) {
    return `+${solution}`
  } else {
    return `${solution}`
  }
}

const computeImaginarySolution = (a, b, c) => {
  const sqrt = Math.sqrt(Math.abs(b * b - 4 * a * c))
  const solution = { sol1: -b / (2 * a), sol2: -b / (2 * a) }
  const imaginarySolution = { sol1: sqrt / (2 * a), sol2: -sqrt / (2 * a) }
  return {
    sol1: `${solution.sol1}${returnString(imaginarySolution.sol1)}i`,
    sol2: `${solution.sol2}${returnString(imaginarySolution.sol2)}i`
  }
}

const isDoubleSolution = ({ sol1, sol2 }) => sol1 === sol2
