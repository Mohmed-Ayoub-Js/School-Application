import Create  from './page/Create.jsx';
import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import User from './page/User.jsx';
const App = () => {
  return (
    <div>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />

          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;