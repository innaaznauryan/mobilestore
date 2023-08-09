import {Formik} from "formik"
import {Schema} from './validation/Schema.js'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from "./redux/signupSlice.js"
import {useRef} from 'react'

const SignUp = () => {
    const dispatch = useDispatch()
    const signup = useSelector(state => state.signup)
    const formRef = useRef()
    console.log(signup)

    const submitReg = (values, {setSubmitting}) => {
        setSubmitting(true)
        dispatch(signupUser(values))
        localStorage.setItem("signup", JSON.stringify(values))
        setTimeout(() => {
            setSubmitting(false)
            formRef.current.reset()
        }, 2000);
    }

  return (
    <>
        <Formik 
        initialValues={{
            fName: "",
            login: "",
            password: "",
            password2: ""            
        }}
        onSubmit={submitReg}
        validationSchema={Schema}>
        {({handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting}) => {
            return <form action="" onSubmit={handleSubmit} ref={formRef}>
                <div className="inputBox">
                    <input type="text" placeholder='First Name' name="fName" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.fName && touched.fName && <p className='inputError'>{errors.fName}</p>}
                </div>
                <div className="inputBox">
                    <input type="text" placeholder='Login' name="login" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.login && touched.login && <p className='inputError'>{errors.login}</p>}
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Password' name="password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password && <p className='inputError'>{errors.password}</p>}
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Repeat Password' name="password2" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password2 && touched.password2 && <p className='inputError'>{errors.password2}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
        }}
        </Formik>
    </>
  )
}

export default SignUp