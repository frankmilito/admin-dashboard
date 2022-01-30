import TopBar from './components/navbar/TopBar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <div className='App'>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <div className='others'></div>
      </div>
    </div>
  )
}

export default App
