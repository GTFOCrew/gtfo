const { Transformer } = require('@parcel/plugin')

// see https://github.com/parcel-bundler/parcel-css/issues/39

const starLineRegex = /^\s*\*(?!\s|\/).+$/gm
const starDefRegex = /{\s*(\*(?!\s|\/).+)\s*}/gm

module.exports = new Transformer({
  async transform({ asset, config, logger }) {
    const source = await asset.getCode()
    const replaced = source
      .replaceAll(starLineRegex, '')
      .replaceAll(starDefRegex, '{}')
    asset.setCode(replaced)
    console.log(replaced)
    return [asset]
  }
})
