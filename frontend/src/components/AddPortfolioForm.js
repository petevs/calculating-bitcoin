import { Box } from '@mui/system'
import useForm from 'hooks/useForm'
import useErrors from 'hooks/useErrors'
import React from 'react'
import FormHeader from './form/FormHeader'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import FormSubmit from './form/FormSubmit'
import useFirebase from 'hooks/useFirebase'
import { useHistory } from 'react-router-dom'
import useModal from 'hooks/useModal'

const AddPortfolioForm = () => {
    
    const initialForm = {
        portfolioName: '',
        portfolioDescription: ''
    }

    const initialErrors = {
        portfolioName: '',
        portfolioDescription: ''
    }

    const schema = yup.object().shape({
        portfolioName: yup.string().min(3).required(),
        portfolioDescription: yup.string()
    })

    const { values, handleFormChange } = useForm(initialForm)
    const { errors, validateChange } = useErrors(initialErrors, schema)

    const { addPortfolio } = useFirebase()

    const history = useHistory()

    const { handleModalClose} = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const path = await addPortfolio(values)
        history.push(`/portfolio/${path}`)
        handleModalClose()
    }

    return (
        <Box component='form' onSubmit={handleSubmit} sx={wrapper}>
            <FormHeader heading='Add a Portfolio' />
            <TextField
                label='Portfolio Name'
                name='portfolioName'
                id='portfolioName'
                size='medium'
                placeholder='Enter a portfolio name'
                value={values.portfolioName}
                onChange={(e) => handleFormChange(e, validateChange)}
                erorr ={errors.portfolioName !== ''}
                helperText={errors.portfolioName}
            />
            <TextField
                label='Portfolio Description'
                name='portfolioDescription'
                id='portfolioDescription'
                size='medium'
                placeholder='Enter a portfolio description'
                value={values.portfolioDescription}
                onChange={(e) => handleFormChange(e, validateChange)}
                erorr ={errors.portfolioDescription !== ''}
                helperText={errors.portfolioDescription}
            />
            <FormSubmit type='submit'>Add Portfolio</FormSubmit>

        </Box>
    )
}

export default AddPortfolioForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem'
}