import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/page/layout/Layout'
import PageBMICalculator from './components/page/PageBMICalculator'
import AboutPage from './components/page/AboutPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<PageBMICalculator/>}/>
              <Route path='about/' element={<AboutPage/>}/>
          </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
