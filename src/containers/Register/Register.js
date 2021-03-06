import React, { useCallback, useEffect, useRef, useState } from "react";
import HandleForm from "./handleForm";
import "./Register.scss";
import validate from "./Validate";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  const { handleChange, handleSubmit, values, errors } = HandleForm(
    submitForm,
    validate
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
    } else {
      if (Object.keys(errors).length === 0) {
        setIsSubmitted(true);
      }
    }
  }, [errors]);
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="col-12 text-center">
              <h1>Register</h1>
            </div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p style={{ color: "red" }}>{errors.username}</p>
              )}
            </div>
            <div className="col-12 form-group login-input">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
                <span>
                  <i className="far fa-eye"></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group login-input">
              <label>Confirm Password</label>
              <div className="custom-input-password">
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                )}
                <span>
                  <i className="far fa-eye"></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {/* {errMessage} */}
            </div>
            <div className="col-12">
              <button
                className={
                  isFirstRender.current || Object.keys(errors).length !== 0
                    ? "btn-login-disable"
                    : "btn-login"
                }
                disabled={
                  isFirstRender.current || Object.keys(errors).length !== 0
                    ? true
                    : false
                }
              >
                Rigister
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
