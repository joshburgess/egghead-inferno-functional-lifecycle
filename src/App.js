import { version } from 'inferno'
// import Component from 'inferno-component'
import Logo from './logo'
import './App.css'
const welcome = `Welcome to Inferno ${version}`
export const mounted = () => alert(welcome)

// export default class App extends Component {
//   componentDidMount () {
//     mounted()
//   }

//   render () {
//     return (
//       <div className='App'>
//         <div className='App-header'>
//           <Logo width='80' height='80' />
//           <h2>{welcome}</h2>
//         </div>
//         <p className='App-intro'>Edit...</p>
//       </div>
//     )
//   }
// }

export default () =>
  <div className='App'>
    <div className='App-header'>
      <Logo width='80' height='80' />
      <h2>{welcome}</h2>
    </div>
    <p className='App-intro'>Edit</p>
  </div>
