import _ from 'lodash'
import compliments from '../data/compliments'

export default ctx => ctx.replyTo(_.sample(compliments))
