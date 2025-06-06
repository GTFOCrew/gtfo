import PropTypes from 'prop-types'
import { clsx } from 'clsx'
import { makeStyles } from '../hooks'

const useStyles = makeStyles(({ elevate = false, className }) => ({
  paper: clsx(
    'near-white',
    'bg-near-black',
    'br3',
    'pa3',
    elevate && 'shadow-2',
    className
  )
}))

const Paper = ({ children, className, elevate }) => {
  const styles = useStyles({ elevate, className })
  return <div className={styles.paper}>{children}</div>
}

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  elevate: PropTypes.bool
}

export default Paper
