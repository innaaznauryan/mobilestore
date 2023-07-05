import React from 'react'
import AllPhones from './components/AllPhones'
import {Routes, Route} from "react-router-dom"
import MainLayout from './Routes/MainLayout'
import ByBrand from "./components/ByBrand"
import SinglePhone from './components/SinglePhone'
import Login from './components/Login'
import PhoneInfo from './components/PhoneInfo'
import PhonePics from './components/PhonePics'


const App = () => {
  return (
    <main>



<Routes>
  <Route element={<MainLayout/>}>
      <Route path='/' element={<AllPhones/>}/>
      <Route path=':brand' element={<ByBrand/>}/>
      <Route path=':brand/single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
      </Route>
      <Route path='/single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
  </Route>
</Routes>

    
    </main>
  )
}

export default App