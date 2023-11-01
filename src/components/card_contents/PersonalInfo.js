import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const PersonalInfo = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form data:", values);
    setSubmitting(false);
  };

  return (
    <div>
      <h1 className="text-blue-900 font-bold text-3xl">Personal Info</h1>
      <p className="text-slate-400 text-lg">
        Please provide your name, email address, and phone number
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="form-group relative my-7">
              <label className="text-sm text-blue-900 font-bold" htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border px-2 py-1 rounded-lg"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm absolute left-0"
              />
            </div>
            <div className="form-group relative my-7">
              <label
                className="text-sm text-blue-900 font-bold"
                htmlFor="email">
                Email Address
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="w-full border px-2 py-1 rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm absolute left-0"
              />
            </div>
            <div className="form-group relative my-7">
              <label
                className="text-sm text-blue-900 font-bold"
                htmlFor="phone">
                Phone Number
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="w-full border px-2 py-1 rounded-lg"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm absolute left-0"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
