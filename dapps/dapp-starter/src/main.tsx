import { App } from './app.tsx'
import { render } from 'preact'
import './app.css'
import 'substrate-dapp-ui/dist/index.css'

render(<App />, document.getElementById('app')!)
