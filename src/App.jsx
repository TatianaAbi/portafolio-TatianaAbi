import { Home } from './components/Home'
import './App.css'
import { HashRouter,Route,Routes } from 'react-router-dom'
import { DefaultProjects } from './components/DefaultProjects'
import { Projects } from './components/Projects'
import { NotFound } from './components/NotFound'
import { Contact } from './components/Contact'
import { About } from './components/About'

function App() {
  return(
    <>
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route path='/' element={<DefaultProjects/>}/>
              <Route path=':slug' element={<Projects/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}

export default App
