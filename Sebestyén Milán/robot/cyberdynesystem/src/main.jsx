import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Terminator from './components/terminator_component.jsx'
import 'tachyons'
import { models } from './models.js'
import TerminatorList from './components/terminator-list/terminator-list.component'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App/>
)
