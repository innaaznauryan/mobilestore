import {Routes, Route} from "react-router-dom"
import MainLayout from './Routes/MainLayout'
import AllPhones from './components/AllPhones'
import ByBrand from "./components/ByBrand"
import SinglePhone from './components/SinglePhone'
import PhoneInfo from './components/PhoneInfo'
import PhonePics from './components/PhonePics'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Cart from "./components/Cart"
import "./App.scss"


const App = () => {




  return (
  
    <>



<Routes>
    
  <Route path='/' element={<MainLayout/>}>
  
      <Route index element={<AllPhones/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='products/:brand' element={<ByBrand/>}/>
      <Route path='products/:brand/single' element={<SinglePhone/>}>
        <Route index element={<PhoneInfo/>}/>
        <Route path='pics' element={<PhonePics/>}/>
      </Route>

  </Route>

  <Route path='*' element={<Error/>} /> 

</Routes>
    
    
    
    </>
    
    
  )
}

export default App