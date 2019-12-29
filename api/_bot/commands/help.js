export default (ctx, next) => {
  ctx.reply('send me a sticker')
  return next()
}
