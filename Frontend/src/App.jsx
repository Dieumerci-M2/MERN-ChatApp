import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/chats' element={<Dashboard />} />
      </Routes>
      
    </div>
  )
}

export default App
