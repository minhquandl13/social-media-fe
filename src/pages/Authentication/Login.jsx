import { Button, TextField } from "@mui/material";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/Auth/auth.action";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

const Login = () => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    dispatch(loginUserAction({ data: values }));
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div style={{ paddingTop: "1rem" }}>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div style={{ paddingTop: "1rem" }}>
            <Button
              sx={{ padding: ".8rem 0" }}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
