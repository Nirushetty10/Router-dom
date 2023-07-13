import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./SignUp.scss"

export default class SignUp extends Component {
  render() {
    return (
        <div>
        <h1>Formik</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            } else if(!values.password) {
              errors.password = 'Required';
            } else if(values.password.length < 8) {
              errors.password = 'Password should be more than 7 character';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
              alert(`Your email is : ${values.email} and password is ${values.password}`);
              setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className='form'>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div"/>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
