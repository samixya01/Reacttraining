
import Home from './Pages/Home'
import "./App.css";
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './HOC/PageNotFound'
import CardDetails from './Pages/CardDetails'


function App() {


  return (
    <>
      <Toolbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/card/:id' element={<CardDetails />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;


