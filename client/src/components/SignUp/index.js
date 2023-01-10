import React from 'react'
import {Formik, Form, Field} from 'formik';
import {format} from 'date-fns';

export default function SignUp(props) {


const initialValues = {
    firstName: '',
    lastName: '',
    birthday: format(new Date(), 'yyyy-MM-dd'),
    email : '',
    password: ''

}

const onSubmit = (values, actions) =>{
    props.sendData(values);
}

  return (
    <div>
        <h2>SignUp</h2>
        <Formik
         initialValues={initialValues} 
        onSubmit={onSubmit}>
            {(props)=>(
                <Form>
                    <Field name="firstName" placeholder='Type your name' />
                    <Field name="lastName" placeholder='Type your last name' />
                    <Field type='date' name="birthday"/>
                    <Field name="email" placeholder='Type your email' />
                    <Field name="password" placeholder='Type your password' />
                    <button type='submit'>Send!</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
