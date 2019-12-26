import React from 'react'
import { render } from 'react-dom'
import 'tachyons'

import Home from './views/Home'
import './styles.css'

render(<Home />, document.querySelector('#app'))

if (module.hot) module.hot.accept()
