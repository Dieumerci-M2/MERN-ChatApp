import './App.css'
import {Routes, Route} from 'react-router-dom'
import Authentification from './Pages/Authentification'
import Dashboard from './Pages/Dashboard'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Authentification />} />
        <Route path='/chats' element={<Dashboard />} />
      </Routes>
      
    </div>
  )
}

export default App
