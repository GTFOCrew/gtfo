import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '../hooks'

const useStyles = makeStyles({
  link: 'link yellow hover-near-black hover-bg-yellow bg-animate pv1 ph2 br2'
})

const Link = React.memo(({ children, href }) => {
  const styles = useStyles()

  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  )
})

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  href: PropTypes.string
}

Link.defaultProps = {
  href: '#'
}

export default Link
