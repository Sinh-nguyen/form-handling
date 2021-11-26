import { useState, useEffect, useRef } from "react";

const HandleForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const isFirstRender = useRef(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    setValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
    } else {
      setErrors(validate(values));
    }
  }, [callback, validate, values]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback, validate, values]);

  return { handleChange, handleSubmit, values, errors };
};

export default HandleForm;
