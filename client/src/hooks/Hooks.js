import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (e) => setValues({
    ...values,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;