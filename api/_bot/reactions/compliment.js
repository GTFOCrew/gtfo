import _ from 'lodash'
import compliments from '../data/compliments'

export default (ctx, next) => {
  ctx.replyMessage(_.sample(compliments))
  return next()
}
