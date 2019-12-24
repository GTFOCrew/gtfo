const makeStyles = styles => props => {
  if (typeof styles === 'function') return styles(props)
  return styles
}

export default makeStyles
