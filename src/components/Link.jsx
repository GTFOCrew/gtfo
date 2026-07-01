import { memo } from 'react'
import { makeStyles } from '../hooks'

/**
 * @typedef {{
 *  href?: string,
 *  children: import('react').ReactNode
 * }} LinkProps
 */

const useStyles = makeStyles({
  link: 'transition-colors ease-in text-yellow-300 hover:text-zinc-950 hover:bg-yellow-300 py-1 px-2 rounded-sm'
})

/**
 * @type {import('react').NamedExoticComponent<LinkProps>}
 */
const Link = memo(({ children, href = '#' }) => {
  const styles = useStyles()

  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  )
})

export default Link
