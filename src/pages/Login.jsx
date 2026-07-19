import axios from 'axios'
import {ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function Login() {
  const navgation= useNavigate()

const handelregister =()=>{
  navgation('/register')
}
  const handelsubmit =(values)=>{
    let domin = 'http://localhost:1337'
    let endpoint = '/api/auth/local' ;
    let url= domin + endpoint ;
    let data = {
      identifier: values.email ,
      password: values.password ,
    }
    axios.post(url,data).then((res)=>{
      let token = res.data.jwt ;
     values.ischecked? localStorage.setItem ('token', token):sessionStorage.setItem('token', token)
      toast.success('success login')
      navgation('/')
    })
    .catch((err)=>{
      toast.error(err.response.data.error.message)
    })
  }

    useEffect(()=>{
        let token= localStorage.getItem('token') || sessionStorage.getItem('token') ;
        if(token){
            navgation('/')
        }
    },[])

const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password:Yup.string().required(),
})
  return (
    <div className='bg-white w-full h-dvh text-gray-500 flex justify-center items-center'>
        <Formik initialValues={{email:'',password:'', ischecked:false}} validationSchema={validationSchema}  onSubmit={handelsubmit} >
          <Form className='w-[400px] pt-5 rounded bg-gray-200/20 border-gray-400 p-4 shadow-2xl border flex flex-col gap-3'>
            <Field className="w-full input rounded " name="email" type="text" placeholder="Enter Your email" />
            <ErrorMessage name='email' component={'p'} className='text-red-600'/>
            <Field className="w-full input rounded " name="password" type="password" placeholder="Enter Your password" />
            <ErrorMessage name='password' component={'p'} className='text-red-600'/>
            <label className='flex text-black gap-3' >
              <Field type='checkbox' name='ischecked' className='checkbox checkbox-primary'/>
              Remember Me
            </label>
            <button type='submit' className='btn btn-primary w-full rounded'>Login</button>
            <Link to={'/register'} className='btn btn-success w-full'>Register</Link>
          </Form>
        </Formik>
    </div>
  )
}
