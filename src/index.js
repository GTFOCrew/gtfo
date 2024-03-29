import React from 'react'
import { render } from 'react-dom'
import 'tachyons'

import Home from './views/Home'
import './styles.css'

render(<Home />, document.querySelector('#app'))

if (module.hot) module.hot.accept()

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  const sw = new URL('service-worker.js', import.meta.url)
  window.addEventListener('load', () =>
    navigator.serviceWorker.register(sw, { type: 'module' })
  )
}
