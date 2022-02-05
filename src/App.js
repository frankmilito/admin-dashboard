import TopBar from './components/navbar/TopBar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserList from './components/userlist/UserList'
import User from './components/user/User'
function App() {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <div className='container'>
          <>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/user/:userID' element={<User />} />
            </Routes>
          </>
        </div>
      </div>
    </Router>
  )
}

export default App
