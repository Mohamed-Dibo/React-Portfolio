import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import userImage from "../user.png";

import "./Register.css";
function FormikComponent() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "",
    hoppies: [""],
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    email: Yup.string()
      .required("Email Name is required")
      .email("Please enter a valid email address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    active: Yup.bool().oneOf([true, false]),
    gender: Yup.string().required("Select Gender"),
  });
  const formControleStyle = {
    height: " 2.9rem",
    padding: "0",
    borderRadius: "10px",
    paddingLeft: "3rem",
  };
  return (
    <div className="signUp-fullbody">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className="signUp-form">
              <div className="header-form">
                <h1>sign up</h1>
              </div>
              <figure className="user">
                <img src={userImage} alt="userImage" />
              </figure>
              <div className="form-content-signUp text-start">
                <Field name="username">
                 
                  {(formikField) => {
                    return (
                      <>
                      <label  className="title">username</label> 
                      <div className="form-floating mb-3">
                        <label htmlFor="username" className="f-label">
                          <span className="input-icon">
                            <FaUserAlt />
                          </span>
                        </label>
                        <input
                          className="form-control"
                          style={formControleStyle}
                          type="username"
                          id="username"
                          {...formikField.field}
                        />
                        <ErrorMessage name="username">
                          {(errMessage) => {
                            return (
                              <div style={{ color: "red" }}>{errMessage}</div>
                            );
                          }}
                        </ErrorMessage>
                      </div>
                      </>
                    );
                  }}
                </Field>
                <Field name="email">
                  {(formikField) => {
                    return (
                      <>
                      <label className="title">email</label> 
                      <div className="form-floating mb-3">
                        <label htmlFor="email" className="f-label">
                          <span className="input-icon">
                            <MdAlternateEmail />
                          </span>
                        
                        </label>
                        <input
                          className="form-control"
                          style={formControleStyle}
                          type="email"
                          id="email"
                          {...formikField.field}
                        />
                        <ErrorMessage name="email">
                          {(errMessage) => {
                            return (
                              <div style={{ color: "red" }}>{errMessage}</div>
                            );
                          }}
                        </ErrorMessage>
                      </div>
                      </>
                    );
                  }}
                </Field>
                <Field name="password">
                  {(formikField) => {
                    return (
                      <>
                      <label className="title">password</label> 
                      <div className="form-floating mb-3">
                        <label htmlFor="password" className="f-label">
                        <span className="input-icon">
                            <RiLockPasswordFill />
                          </span>
                         
                        </label>
                        <input
                         className="form-control"
                         style={formControleStyle}
                          type="password"
                          id="password"
                          {...formikField.field}
                        />
                        <ErrorMessage name="password">
                          {(errMessage) => {
                            return (
                              <div style={{ color: "red" }}>{errMessage}</div>
                            );
                          }}
                        </ErrorMessage>
                      </div>
                      </>
                    );
                  }}
                </Field>
                <Field name="confirmPassword">
                  {(formikField) => {
                    return (
                      <>
                      <label className="title">confirmPassword</label> 
                      <div className="form-floating mb-3">
                        <label
                          htmlFor="confirmPassword"
                          className="f-label"
                        >
                          <span className="input-icon">
                            <RiLockPasswordFill />
                          </span>
                    
                        </label>
                        <input
                         className="form-control"
                         style={formControleStyle}
                          type="password"
                          id="confirmPassword"
                          {...formikField.field}
                        />
                        <ErrorMessage name="confirmPassword">
                          {(errMessage) => {
                            return (
                              <div style={{ color: "red" }}>{errMessage}</div>
                            );
                          }}
                        </ErrorMessage>
                      </div>
                      </>
                    );
                  }}
                </Field>
                <Field name="active">
                  {(formikField) => {
                    return (
                      <div className="chk-input">
                        <label htmlFor="active" className="pe-2">
                          active
                        </label>
                        <input
                         className="me-2"
                          type="checkbox"
                          id="active"
                          {...formikField.field}
                        />
                      </div>
                    );
                  }}
                </Field>
                <Field name="gender">
                  {(formikField) => {
                    return (
                      <div className="py-3">
                        <label htmlFor="gender">
                          Gender : 
                        </label>
                        <select
                          className="dropDwn mb-3"
                          name="gender"
                          id="gender"
                          {...formikField.field}
                      
                        >
                          <option value="" label="Select Gender" />
                          <option className='text-capitalize' value="male" label="male" />
                          <option className='text-capitalize' value="female" label="female" />
                        </select>
                        <ErrorMessage name="gender">
                          {(errMessage) => {
                            return (
                              <div style={{ color: "red" }}>{errMessage}</div>
                            );
                          }}
                        </ErrorMessage>
                      </div>
                    );
                  }}
                </Field>

                <FieldArray name="hoppies">
                  {({ push, remove }) => {
                    return (
                      <div>
                        {formik.values.hoppies.length > 0 &&
                          formik.values.hoppies.map((hoppy, index) => (
                            <div key={index} className="mb-3">
                              <label className="me-2 text-capitalize">hoppy :</label>
                              <Field name={`hoppies.${index}`} className="hoppy" />
                              <span
                                type="button"
                                className="del"
                                onClick={() => remove(index)}
                              >
                                <MdDelete />
                              </span>
                            </div>
                          ))}
                        <button
                          type="button"
                          className="btn btn-success text-uppercase"
                          onClick={() => push("")}
                        >
                          Add hoppy
                        </button>
                      </div>
                    );
                  }}
                </FieldArray>

                <button
                  type="submit"
                  className="btn btn-primary m-auto d-block mt-4 w-100 text-uppercase"
                  style={{ display: "block" }}
                  disabled={!formik.isValid}
                >
                  sign up
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikComponent;
