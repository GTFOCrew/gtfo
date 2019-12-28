export default (ctx, next) => {
  console.debug(`> ${ctx.message.from.username}: ${ctx.message.text}`)
  return next()
}
