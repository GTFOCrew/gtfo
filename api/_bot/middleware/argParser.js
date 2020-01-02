// https://larsgraubner.com/telegraf-middleware-command-arguments/
export default (ctx, next) => {
  if (ctx.updateType === 'message') {
    const text =
      ctx.update.message.text && ctx.update.message.text.toLowerCase()
    if (text && text.startsWith('/')) {
      const match = text.match(/^\/([^\s]+)\s?(.+)?/)
      let args = []
      let command
      if (match !== null) {
        if (match[1]) {
          command = match[1]
        }
        if (match[2]) {
          args = match[2].split(' ')
        }
      }

      ctx.state.command = {
        raw: text,
        command,
        args
      }
    }
  }
  return next()
}
/*
* example of message
* {
  raw: '/lights on',
  command: 'lights',
  args: ['on']
}
* */
