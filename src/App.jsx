import {useContext} from 'react'
import {UserContext} from './components/Context/UserAuthContext'
import AllPhones from './components/AllPhones'
import {Routes, Route} from "react-router-dom"
import MainLayout from './Routes/MainLayout'
import ByBrand from "./components/ByBrand"
import SinglePhone from './components/SinglePhone'
import Login from './components/Login'
import PhoneInfo from './components/PhoneInfo'
import PhonePics from './components/PhonePics'
import Error from './components/Error'



const App = () => {




  return (
  
    <main>



<Routes>
    
  
  <Route path='/' element={<MainLayout/>}>
  
      <Route index element={<AllPhones/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='products/:brand' element={<ByBrand/>}/>
      <Route path='products/:brand/single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
        
      </Route>

  </Route>
<Route path='*' element={<Error/>} /> 
</Routes>
    
    
    
    </main>
    
    
  )
}

export default App