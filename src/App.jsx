import React from 'react'
import AllPhones from './components/AllPhones'
import {Routes, Route} from "react-router-dom"
import MainLayout from './Routes/MainLayout'
import ByBrand from "./components/ByBrand"
import SinglePhone from './components/SinglePhone'

const App = () => {
  return (
    <main>



<Routes>
  <Route element={<MainLayout/>}>
      <Route path="/" element={<AllPhones/>}/>
      <Route path=':brand' element={<ByBrand/>}/>
      <Route path=':brand/single' element={<SinglePhone/>}/>
  </Route>
</Routes>

    
    </main>
  )
}

export default App