export default (req, res) => {
  const {
    query: { name = 'world' }
  } = req

  res.status(200).send(`hello ${name} !`)
}
