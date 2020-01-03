/*
 * https://larsgraubner.com/telegraf-middleware-command-arguments/
 * example of message:
 * {
 *   raw: '/lights on',
 *   command: 'lights',
 *   args: ['on']
 * }
 */
export default (ctx, next) => {
  if (ctx.updateType === 'message') {
    const raw = ctx.update.message.text && ctx.update.message.text.toLowerCase()

    if (raw && raw.startsWith('/')) {
      const match = raw.match(/^\/([^\s]+)\s?(.+)?/)
      let args = []
      let command

      if (match !== null) {
        if (match[1]) command = match[1]
        if (match[2]) args = match[2].split(' ')
      }

      ctx.state.command = {
        raw,
        command,
        args
      }
    }
  }

  return next()
}
