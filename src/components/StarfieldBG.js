import React from 'react'
import PropTypes from 'prop-types'
import P5 from 'react-p5-wrapper'
import { debounce } from '../fn'

const StarfieldBG = React.memo(({ stars, bg, fg, trail }) => (
  <P5
    sketch={p5 => {
      let _stars = new Array(stars).fill(null).map(() => new Star())

      p5.setup = () => {
        let canvas = p5.createCanvas(
          window.innerWidth + 1,
          window.innerHeight + 1
        )

        canvas.position(0, 0)
        canvas.style('z-index', '-1')
      }

      p5.draw = () => {
        p5.background(bg)
        p5.translate(window.innerWidth / 2, window.innerHeight / 2)
        _stars.forEach(s => s.draw(p5, fg, trail))
      }

      p5.windowResized = debounce(() => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight)
      }, 500)
    }}
  />
))

StarfieldBG.propTypes = {
  stars: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
  trail: PropTypes.bool
}

StarfieldBG.defaultProps = {
  stars: 400,
  bg: '#111',
  fg: '#eee',
  trail: false
}

export default StarfieldBG

class Star {
  static RADIUS = 16
  static MAX_SPEED = 4
  static TRAIL_LENGTH = 16

  constructor() {
    this.reset()
    this.z = Math.random() * window.innerWidth - window.innerWidth
  }

  reset() {
    this.speed = Math.random() * Star.MAX_SPEED + 1
    this.x = Math.random() * window.innerWidth - window.innerWidth / 2
    this.y = Math.random() * window.innerHeight - window.innerHeight / 2
    this.z = window.innerWidth
  }

  draw(p5, color, trail) {
    this.z -= this.speed
    if (this.z < 1) this.reset()

    let sx = p5.map(this.x / this.z, 0, 1, 0, window.innerWidth)
    let sy = p5.map(this.y / this.z, 0, 1, 0, window.innerHeight)
    let r = p5.map(this.z, 0, window.innerWidth, Star.RADIUS, 0)
    p5.fill(color)
    p5.noStroke()
    p5.ellipse(sx, sy, r, r)

    if (trail) {
      let pz = this.z + this.speed * Star.TRAIL_LENGTH
      let px = p5.map(this.x / pz, 0, 1, 0, window.innerWidth)
      let py = p5.map(this.y / pz, 0, 1, 0, window.innerHeight)
      p5.stroke(color)
      p5.line(px, py, sx, sy)
    }
  }
}
