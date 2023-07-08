import {Formik} from "formik"
import {Schema} from './validation/Schema'
import {Context} from './ContextProvider'
import {useContext, useRef} from 'react'

let ID
if (!localStorage.getItem("curUserId")) ID = 1
else ID = +localStorage.getItem("curUserId")

const SignUp = () => {
    const [state, dispatch] = useContext(Context)
    const formRef = useRef()

    const submitReg = (values, {setSubmitting}) => {
        setSubmitting(true)
        dispatch({type: "updateKeys", payload: {userId: ID, ...values}})
        localStorage.setItem("user" + ID, JSON.stringify(values))
        localStorage.setItem("curUserId", ++ID)
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
            lName: "",
            email: "",
            password: "",
            password2: ""
        }}
        onSubmit={submitReg}
        validationSchema={Schema}>
        {({handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting}) => {
            return <form action="" onSubmit={handleSubmit} ref={formRef}>
                <div className="inputBox">
                    <input type="text" placeholder='First Name' name="fName" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.fName && touched.fName && <span className='inputError'>{errors.fName}</span>}
                </div>
                <div className="inputBox">
                    <input type="text" placeholder='Last Name' name="lName" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.lName && touched.lName && <span className='inputError'>{errors.lName}</span>}
                </div>
                <div className="inputBox">
                    <input type="text" placeholder='Email' name="email" onChange={handleChange} onBlur={handleBlur}/> 
                    {errors.email && touched.email && <span className='inputError'>{errors.email}</span>}
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Password' name="password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password && <span className='inputError'>{errors.password}</span>}
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Repeat Password' name="password2" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password2 && touched.password2 && <span className='inputError'>{errors.password2}</span>}
                </div>
                <input type="submit" value="Sign up" disabled={isSubmitting}/>
            </form>
        }}
        </Formik>
    </>
  )
}

export default SignUp