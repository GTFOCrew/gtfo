import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, href }) => (
  <a
    href={href}
    className='link yellow hover-near-black hover-bg-yellow bg-animate pv1 ph2 br2'
  >
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  href: PropTypes.string
}

Link.defaultProps = {
  href: '#'
}

export default Link
