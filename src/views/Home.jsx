import { Container, Link, Paper, StarfieldBG } from '../components'
import { makeStyles } from '../hooks'

const gtfoLogo = new URL('../img/gtfo.png', import.meta.url).toString()

const useStyles = makeStyles({
  container: 'code font-semibold',
  logo: 'w-32 sm:w-64 rounded-full border-4 sm:border-8 border-gray-100 mb-8 shadow-xl cursor-pointer backface-hidden transition-transform ease-out duration-300 hover:scale-105 focus:scale-105 active:scale-90',
  paper: 'hidden sm:block'
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
