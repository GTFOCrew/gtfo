import _ from 'lodash'
import compliments from '../data/compliments'

export default ctx => ctx.replyMessage(_.sample(compliments))
