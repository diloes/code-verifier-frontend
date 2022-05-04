import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { AxiosResponse } from "axios"

import { register } from "../../services/authService"


const RegisterForm = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    age: 18
  }

  // Yup Validation Schema
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Username must have 6 letters minimun')
      .max(12, 'Username must have maximum 12 letters')
      .required('Name is required'),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is  required"),
    password: Yup.string()
      .min(8, 'Password too short')
      .required("Password is required"),
    confirm: Yup.string()
      .when('password', {
        is: (value: string) => ( value && value.length > 0 ? true : false ),
        then: Yup.string().oneOf(
          [Yup.ref('password')], 'Password must match'
        ) 
        })
      .required('You must confirm your password'),
    age: Yup.number()
      .min(10, 'You must be over 10 years old')
      .required('Age is required')
  })

  return (
    <div>
      <h4>Register Form</h4>

      {/* Formik Wrapper */}
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {

          const { name, email, password, age } = values

          register(name, email, password, age)
            .then((response: AxiosResponse) => {
              if (response.status === 200) {
                console.log('User register correctly')
                console.log(response.data)
                alert('User registered successfuly')
              } else {
                throw new Error("Error in registry")
              }
            })
            .catch((error) =>
              console.error(`[REGISTER ERROR]: Something went wrong: ${error}`)
            );
        }}
      >
        {({ values, touched, isSubmitting, errors, handleChange, handleBlur }) => (
          <Form>
            
            {/* NAME FIELD */}
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
            />

            {/* Name Errors */}
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div"></ErrorMessage>
            )}

            {/* EMAIL FIELD */}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />

            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            {/* PASSWORD FIELD */}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
            />

            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            {/* CONFIRM FIELD */}
            <label htmlFor="password">Confirm Password</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="Confirm your password"
            />

            {/* Confirm Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            {/* AGE FIELD */}
            <label htmlFor="age">Confirm Password</label>
            <Field
              id="age"
              type="number"
              name="age"
            />

            {/* Age Errors */}
            {errors.age && touched.age && (
              <ErrorMessage name="age" component="div"></ErrorMessage>
            )}

            {/* SUBMIT FORM */}
            <button type="submit">Register</button>

            {/* Message if the form is submitting */}
            {isSubmitting ? <p>Sending data...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm