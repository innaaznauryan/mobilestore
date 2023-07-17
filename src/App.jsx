<<<<<<< HEAD
import React from 'react'
=======
import {useContext} from 'react'
import {UserContext} from './components/Context/UserAuthContext'
>>>>>>> master
import AllPhones from './components/AllPhones'
import {Routes, Route} from "react-router-dom"
import MainLayout from './Routes/MainLayout'
import ByBrand from "./components/ByBrand"
import SinglePhone from './components/SinglePhone'
import Login from './components/Login'
import PhoneInfo from './components/PhoneInfo'
import PhonePics from './components/PhonePics'
import Error from './components/Error'


<<<<<<< HEAD
const App = () => {
=======

const App = () => {




>>>>>>> master
  return (
  
    <main>



<Routes>
    
<<<<<<< HEAD
    {/* <Route path='/error' element={<Error/>} />  */}
  <Route path='/' element={<MainLayout/>}>
  
      <Route index element={<AllPhones/>}/>
      <Route path=':brand' element={<ByBrand/>}/>
      <Route path=':brand/single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
      </Route>
      <Route path='single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
=======
  
  <Route path='/' element={<MainLayout/>}>
  
      <Route index element={<AllPhones/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='products/:brand' element={<ByBrand/>}/>
      <Route path='products/:brand/single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
        
>>>>>>> master
      </Route>

  </Route>
<Route path='*' element={<Error/>} /> 
</Routes>
    
    
    
    </main>
    
    
  )
}

export default App