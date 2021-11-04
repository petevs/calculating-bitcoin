import { useState } from 'react'

const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues)

    const handleFormChange = (e, validation) => {
        if(validation){
            validation(e)
        }
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (e, name) => {
        setValues({
            ...values,
           [name]: e
        })
    }

    return { values, handleFormChange, handleDateChange }
}

export default useForm
