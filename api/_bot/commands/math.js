import nerdamer from 'nerdamer/all'
import mathjax from 'mathjax'
import sharp from 'sharp'

const getMathJax = (() => {
  let MathJax = null
  return async () => {
    if (MathJax == null) {
      MathJax = await mathjax.init({
        loader: {
          load: ['input/tex', 'output/svg']
        },
        startup: {
          typeset: false
        }
      })
    }

    return MathJax
  }
})()

export default async (ctx) => {
  const MathJax = await getMathJax()
  const input = ctx.state.command.args.join(' ')
  const tex = input.includes('\\')
    ? input
    : nerdamer(ctx.state.command.args.join(' ')).toTeX()
  const result = await MathJax.tex2svgPromise(tex, {
    display: true,
    em: 16,
    ex: 8,
    containerWidth: 100 * 16
  })

  if (!result.errors) {
    const scale = 4
    const adaptor = MathJax.startup.adaptor
    // change some properties of the svg to scale the svg
    const [svg] = result.children
    svg.attributes.width = `${parseFloat(svg.attributes.width) * scale}ex`
    svg.attributes.height = `${
      parseFloat(svg.attributes.height) * scale * 1.1
    }ex`
    // convert svg dom to string to png
    const data = adaptor.innerHTML(result)
    const image = sharp(Buffer.from(data, 'utf-8'))
    const pngData = await image.png().toBuffer()

    return ctx.replyWithPhoto(
      {
        source: pngData
      },
      {
        reply_to_message_id: ctx.message.message_id
      }
    )
  }
}
