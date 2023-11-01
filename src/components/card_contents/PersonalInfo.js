import React, { useState } from "react";
import { useFormik } from "formik"; // Import useFormik from Formik
import * as Yup from "yup";

const PersonalInfo = ({ updateFormValid }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission, you can add more logic here
      console.log("Form submitted with values:", values);
      updateFormValid(formik.isValid);
    },
  });

  return (
    <div>
      <h1 className="text-blue-900 font-bold text-3xl">Personal Information</h1>
      <p className="text-slate-400 text-lg mb-5">
        Provide your personal details
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-blue-900 text-sm font-bold mb-2"
            htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={`${
              formik.touched.firstName && formik.errors.firstName
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline`}
            placeholder="First Name"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-xs italic mt-1">
              {formik.errors.firstName}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 text-sm font-bold mb-2"
            htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={`${
              formik.touched.lastName && formik.errors.lastName
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline`}
            placeholder="Last Name"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-xs italic mt-1">
              {formik.errors.lastName}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline`}
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs italic mt-1">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-900 text-white active:bg-blue-700 font-bold text-sm px-5 py-2 rounded focus:outline-none focus:shadow-outline">
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;

// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const PersonalInfo = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     phone: Yup.string().required("Phone number is required"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log("Form data:", values);
//     setSubmitting(false);
//   };

//   return (
//     <div>
//       <h1 className="text-blue-900 font-bold text-3xl">Personal Info</h1>
//       <p className="text-slate-400 text-lg">
//         Please provide your name, email address, and phone number
//       </p>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}>
//         {() => (
//           <Form>
//             <div className="form-group relative my-7">
//               <label className="text-sm text-blue-900 font-bold" htmlFor="name">
//                 Name
//               </label>
//               <Field
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full border px-2 py-1 rounded-lg"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-600 text-sm absolute left-0"
//               />
//             </div>
//             <div className="form-group relative my-7">
//               <label
//                 className="text-sm text-blue-900 font-bold"
//                 htmlFor="email">
//                 Email Address
//               </label>
//               <Field
//                 type="text"
//                 id="email"
//                 name="email"
//                 className="w-full border px-2 py-1 rounded-lg"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-600 text-sm absolute left-0"
//               />
//             </div>
//             <div className="form-group relative my-7">
//               <label
//                 className="text-sm text-blue-900 font-bold"
//                 htmlFor="phone">
//                 Phone Number
//               </label>
//               <Field
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 className="w-full border px-2 py-1 rounded-lg"
//               />
//               <ErrorMessage
//                 name="phone"
//                 component="div"
//                 className="text-red-600 text-sm absolute left-0"
//               />
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default PersonalInfo;
