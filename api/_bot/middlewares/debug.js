import _ from 'lodash'

export default (ctx, next) => {
  const from = _.get(ctx, 'from.username', 'user')
  const update = _.get(ctx, 'message.text') || _.get(ctx, 'updateSubTypes[0]')

  console.debug(`> ${from}: ${update}`)

  return next()
}
