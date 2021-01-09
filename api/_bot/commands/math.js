import nerdamer from 'nerdamer/all'
import mathjax from 'mathjax-node-svg2png'

mathjax.config({
  MathJax: {}
})

mathjax.start()

export default async (ctx) => {
  const result = await mathjax.typeset({
    math: nerdamer(ctx.state.command.args.join(' ')).toTeX(),
    format: 'TeX',
    png: true,
    scale: 2
  })

  if (!result.errors) {
    const data = result.png.replace(/^data:image\/png;base64,/, '')

    ctx.replyWithPhoto(
      {
        source: Buffer.from(data, 'base64')
      },
      {
        reply_to_message_id: ctx.message.message_id
      }
    )
  }
}
