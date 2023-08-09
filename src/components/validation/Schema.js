import * as yup from 'yup'

const passRegex = /(?=.*[A-Za-z])(?=.*[0-9])/
const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const Schema = yup.object().shape({
    fName: yup.string().min(3).max(10).matches(/^[^0-9]*$/, "can't contain numbers").required(),
    login: yup.string().min(4).max(16).matches(/^[^0-9]*$/, "can't contain numbers").required(),
    password: yup.string().min(6).max(10).matches(passRegex, "invalid password format").required(),
    password2: yup.string().oneOf([yup.ref("password"), null], "password didn't match").required()
})
