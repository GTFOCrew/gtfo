import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '../hooks'

const useStyles = makeStyles(({ fullscreen, className }) => ({
  container: clsx(
    'flex',
    'flex-column',
    'items-center',
    'justify-center',
    'bg-transparent',
    fullscreen && 'w-100',
    fullscreen && 'min-vh-100',
    className
  )
}))

const Container = ({ children, className, fullscreen }) => {
  const styles = useStyles({ fullscreen, className })
  return <section className={styles.container}>{children}</section>
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  className: PropTypes.string,
  fullscreen: PropTypes.bool
}

Container.defaultProps = {
  fullscreen: false
}

export default Container
