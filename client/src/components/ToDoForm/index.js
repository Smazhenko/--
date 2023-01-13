import React, { useState } from 'react';
import {Formik, Form, Field} from 'formik';
import {format} from 'date-fns';

export default function ToDoForm(props) {
    const initialValues = {
        body: '',
        deadline:format(new Date(), 'yyyy-MM-dd'),
    }

    const onSubmit = (values, actions) =>{
        props.sendData(values);
        
    }
  return (
    <Formik
    initialValues={initialValues} 
   onSubmit={onSubmit}>
       {(props)=>(
           <Form>
               <Field name="body" placeholder='New todo' />
               <Field type='date' name="deadline"/>
               <button type='submit'>Send!</button>
           </Form>
       )}
   </Formik>
        
    // <input type="text" name="body" />
    // <input type="date" name="deadine" />
    // <button>Send!</button>
 
  )
}
