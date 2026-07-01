import { createRoot } from 'react-dom/client'

import Home from './views/Home'
import './styles.css'

const root = createRoot(document.querySelector('#app'))
root.render(<Home />)

if (import.meta.hot) import.meta.hot.accept()
