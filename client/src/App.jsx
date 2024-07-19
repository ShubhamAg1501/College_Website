import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
    {/*Header*/}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Sign-in" element={<SignIn/>} />
      <Route path="/Sign-up" element={<SignUp/>} />
      <Route path="/Profile" element={<Profile/>} />
    </Routes>
    
    </BrowserRouter>
  )
}
