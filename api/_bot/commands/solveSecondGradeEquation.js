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
  const sol = computeSolution(a, b, c)
  
  if (!sol) {
    return ctx.replyMessage('The equation does not have real solutions')
  }
  
  const basicMessage = `The solution to \`${returnString(a)}x²${returnString(
    b
  )}x${returnString(c)}=0\` equation is`
  
  if (isDoubleSolution(sol)) {
    return ctx.replyMessage(
      `${basicMessage} \`x=${sol.sol1}\` (double solution)`
    )
  }
  
  return ctx.replyMessage(
    `${basicMessage} \`x1=${sol.sol1}\` and \`x2=${sol.sol2}\``
  )
}

const computeSolution = (a, b, c) => {
  const sqrt = Math.sqrt(b * b - 4 * a * c)
  if (isNaN(sqrt)) {
    return null
  }
  return { sol1: (-b + sqrt) / (2 * a), sol2: (-b - sqrt) / (2 * a) }
}

const returnString = number => {
  if (number > 0) {
    return `+${number}`
  } else {
    return number.toString()
  }
}

const isDoubleSolution = ({ sol1, sol2 }) => sol1 === sol2
