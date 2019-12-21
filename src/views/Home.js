import React from 'react'
import { Link, StarfieldBG } from '../components'
import gtfoLogo from '../img/gtfo.png'

const Home = () => (
  <section className='flex flex-column items-center justify-center bg-transparent near-white w-100 min-vh-100 code fw6'>
    <StarfieldBG bg='#222' fg='#eee' />

    <img
      src={gtfoLogo}
      className='w5 br-pill ba bw3 b--near-white mb4 shadow-2 pointer grow'
    />

    <main className='bg-near-black br3 pa3 shadow-2'>
      check out <Link href='/api/test'>/api/test</Link> !
    </main>
  </section>
)

export default Home
