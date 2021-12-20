import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Login.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLockFill } from "react-icons/ri";
import userImage from "../user.png"
function Formik() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const formControleStyle = {
    height: " 2.9rem",
    padding: "0",
    borderRadius: "10px",
    paddingLeft: "6.5rem",
  };
  return (
    <div className="login-fullbody">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="header-form">
          <h1>sign in</h1>
        </div>
        <figure className="user">
        <img src={userImage} alt="userImage" />
        </figure>
        <div className="form-content text-start">
          <div className="form-floating mb-3">
            <label htmlFor="email" className="f-label">
              <span className="input-icon">
                <FaUserAlt />
              </span>
              email :
            </label>
            <input
              style={formControleStyle}
              className="form-control"
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="password" className="f-label">
              <span className="input-icon">
                <RiLockFill />
              </span>
              password :
            </label>
            <input
              style={{ ...formControleStyle, paddingLeft: "8.3rem" }}
              className="form-control f-input"
              type="password"
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>
          <div className="chk-input">
            <label htmlFor="rememberMe">remember me</label>
            <input
              className="me-2"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              {...formik.getFieldProps("rememberMe")}
            />
          </div>
          <button
          disabled={!formik.isValid}
            type="submit"
            style={{
              backgroundColor: "#03aee1",
              border: "none",
              padding: "12px 0",
            }}
            className="btn btn-primary m-auto d-block mt-3 w-100 text-uppercase"
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formik;
