import { clsx } from 'clsx'
import { makeStyles } from '../hooks'

/**
 * @typedef {{
 *  className?: string,
 *  fullscreen?: boolean,
 *  children: import('react').ReactNode
 * }} ContainerProps
 */

const useStyles = makeStyles(({ fullscreen = false, className }) => ({
  container: clsx(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'bg-transparent',
    fullscreen && 'w-full',
    fullscreen && 'min-h-screen',
    className
  )
}))

/**
 * @param {ContainerProps} param0 Props
 */
const Container = ({ children, className, fullscreen }) => {
  const styles = useStyles({ fullscreen, className })
  return <section className={styles.container}>{children}</section>
}

export default Container
