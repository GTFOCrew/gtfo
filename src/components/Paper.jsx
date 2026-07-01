import { clsx } from 'clsx'
import { makeStyles } from '../hooks'

/**
 * @typedef {{
 *  className?: string,
 *  elevate?: boolean,
 *  children: import('react').ReactNode
 * }} PaperProps
 */

const useStyles = makeStyles(({ elevate = false, className }) => ({
  paper: clsx(
    'text-zinc-100',
    'bg-zinc-950',
    'leading-tight',
    'rounded-lg',
    'p-4',
    elevate && 'shadow-lg',
    className
  )
}))

/**
 * @param {PaperProps} param0 Props
 */
const Paper = ({ children, className, elevate }) => {
  const styles = useStyles({ elevate, className })
  return <div className={styles.paper}>{children}</div>
}

export default Paper
