export default (ctx, next) => {
  ctx.replyMessage = (msg, opts = {}) =>
    ctx.reply(msg, {
      reply_to_message_id: ctx.message.message_id,
      parse_mode: 'Markdown',
      ...opts
    })

  return next()
}
