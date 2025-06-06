import { createRoot } from 'react-dom/client'
import 'tachyons'

import Home from './views/Home'
import './styles.css'

const root = createRoot(document.querySelector('#app'))
root.render(<Home />)

if (import.meta.hot) import.meta.hot.accept()

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  const sw = new URL('./service-worker.js', import.meta.url)
  window.addEventListener('load', () =>
    navigator.serviceWorker.register(sw, { type: 'module' })
  )
}
