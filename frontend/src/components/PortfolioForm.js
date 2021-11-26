import { Box } from '@mui/system'
import useForm from 'hooks/useForm'
import useErrors from 'hooks/useErrors'
import FormHeader from './form/FormHeader'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import FormSubmit from './form/FormSubmit'
import useFirebase from 'hooks/useFirebase'
import useModal from 'hooks/useModal'
import GlobalContext from 'state/GlobalContext'
import { useContext } from 'react'

const PortfolioForm = ({title, portfolioName, portfolioDescription, id, visibility, currency }) => {
    
    const {state} = useContext(GlobalContext)

    console.log(state)


    const initialForm = {
        portfolioName: portfolioName || '',
        portfolioDescription: portfolioDescription || '',
        visibility: visibility || 'private',
        displayName: state.user.displayName,
        uid: state.auth.uid
    }

    const initialErrors = {
        portfolioName: '',
        portfolioDescription: '',
        visibility: ''
    }

    const schema = yup.object().shape({
        portfolioName: yup.string().min(3).required(),
        portfolioDescription: yup.string(),
        visibility: yup.string()
    })

    const { values, handleFormChange } = useForm(initialForm)
    const { errors, validateChange } = useErrors(initialErrors, schema)

    const { addPortfolio, updatePortfolio } = useFirebase()

    const { handleModalClose} = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(title === 'Add Portfolio'){
            await addPortfolio(values, id, visibility)
        }
        if(title === 'Edit Portfolio'){
            updatePortfolio(values, id, visibility)
        }
        handleModalClose()
    }

    return (
        <Box component='form' onSubmit={handleSubmit} sx={wrapper}>
            <FormHeader heading={title} />
            <TextField
                label='Portfolio Name'
                name='portfolioName'
                id='portfolioName'
                size='medium'
                placeholder='Enter a portfolio name'
                value={values.portfolioName}
                onChange={(e) => handleFormChange(e, validateChange)}
                error ={errors.portfolioName !== ''}
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
                error ={errors.portfolioDescription !== ''}
                helperText={errors.portfolioDescription}
            />
            <FormSubmit type='submit'>{title === 'Add Portfolio' ? title : 'Save Changes'}</FormSubmit>

        </Box>
    )
}

export default PortfolioForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    padding: '1rem'
}