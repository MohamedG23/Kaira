import {ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password:Yup.string().required()
  })
  return (
    <div className='bg-black w-full h-dvh text-gray-500 flex justify-center items-center'>
        <Formik initialValues={{email:'', password:''}}  validationSchema={validationSchema}>
          <Form className='w-[400px] rounded bg-gray-500  p-4 shadow border flex flex-col gap-3'>
            <Field className="w-full input" name="email" type="text" placeholder="enter your email"/>
            <ErrorMessage name='email' component={'p'} className='text-red-700'/>
            <Field className="w-full input" name="password" type="text" placeholder="enter your password"/>
            <ErrorMessage name='password' component={'p'} className='text-red-700'/>
            <button type='submit' className='btn btn-primary w-full'>Login</button>
          </Form>
        </Formik>
    </div>
  )
}
