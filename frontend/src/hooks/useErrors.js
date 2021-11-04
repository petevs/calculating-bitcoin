import { useState } from 'react'
import * as yup from 'yup'

const useErrors = (initialValues, schema) => {

    const [errors, setErrors] = useState(initialValues)

    const validateChange = (e) => {
        yup.reach(schema, e.target.name)
            .validate(e.target.value)
            .then(valid => setErrors({
                ...errors,
                [e.target.name]: ''
            }))
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    return { errors, validateChange }
}

export default useErrors
