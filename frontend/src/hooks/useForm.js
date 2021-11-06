import { useState, useEffect, useRef } from 'react'

const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues)
    const initial = useRef(initialValues)
    console.log(initial)

    // useEffect(() => {
    //     if(initial.current !== initialValues){
    //         setValues(initialValues)
    //     }
    // },[initialValues])

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

    return { values, setValues, handleFormChange, handleDateChange }
}

export default useForm
