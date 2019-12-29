export default (ctx, next) => {
  ctx.reply('welcome')
  return next()
}
