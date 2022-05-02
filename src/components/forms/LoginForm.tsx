import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import { login } from "../../services/authService"
import { AxiosResponse } from "axios"

// Define Schema of validation with Yup
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is  required"),
  password: Yup.string().required("Password is required"),
});

// Login component  
const LoginForm = () => {
  // Define the initial credentials
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Form</h4>

      {/* Formik to encapsulate a Form */}
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {

          login(values.email, values.password)
            .then((response: AxiosResponse) => {

              if (response.status === 200) {
                if (response.data.token) {
                  sessionStorage.setItem('sessionToken', response.data.token)
                } else {
                  throw new Error("Error generating Login Token")
                }
              } else {
                throw new Error("Invalid credentials")
              }
            })
            .catch((error) =>
              console.error(`[LOGIN ERROR]: Something went wrong: ${error}`)
            );
        }}
      >
        {({ values, touched, isSubmitting, errors, handleChange, handleBlur }) => (
          <Form>
            
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
              placeholder="example"
            />

            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            {/* SUBMIT FORM */}
            <button type="submit">Login</button>

            {/* Message if the form is submitting */}
            {isSubmitting ? <p>Checking credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm
