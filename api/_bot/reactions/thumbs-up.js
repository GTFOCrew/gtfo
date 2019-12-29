export default (ctx, next) => {
  ctx.replyMessage('👍')
  return next()
}
