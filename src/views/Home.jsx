import { Container, Link, Paper, StarfieldBG } from '../components'
import { makeStyles } from '../hooks'

const gtfoLogo = new URL('../img/gtfo.png', import.meta.url).toString()

const useStyles = makeStyles({
  container: 'code fw6',
  logo: 'w4 w5-ns br-pill ba bw2 bw3-ns b--near-white mb4 shadow-2 pointer grow',
  paper: 'dn db-ns'
})

const Home = () => {
  const styles = useStyles()

  return (
    <Container fullscreen className={styles.container}>
      <StarfieldBG bg='#222' fg='#eee' />
      <img src={gtfoLogo} className={styles.logo} />
      <Paper elevate className={styles.paper}>
        check out <Link href='/api/hi'>/api/hi</Link> !
      </Paper>
    </Container>
  )
}

export default Home
