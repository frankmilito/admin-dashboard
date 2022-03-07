import TopBar from './components/navbar/TopBar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserList from './components/userlist/UserList'
import User from './components/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/productList/Product'
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
              <Route path='/new-user' element={<NewUser />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/product/:productID' element={<Product />} />
              <Route path='/new-product' element={<NewUser />} />
            </Routes>
          </>
        </div>
      </div>
    </Router>
  )
}

export default App
