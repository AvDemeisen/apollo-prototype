import { useState } from 'react'

const useForm = (callback) => {

  const [values, setValues] = useState({})

  const handleSubmit = event => {
    event.preventDefault()
    callback()
  }

  const handleChange = element => setValues({
    ...values,
    [element.currentTarget.name]: element.currentTarget.value
  })

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export default useForm;