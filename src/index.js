import { render } from 'inferno'
import App, { mounted } from './App'
import './index.css'

// render(
//   <App />,
//   document.getElementById('app')
// )

render(
  <App onComponentDidMount={mounted} />,
  document.getElementById('app')
)
