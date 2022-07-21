import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes />
      </div>
    </Router>
  )
}

export default App
