import { Button, LinearProgress, TextField, Typography, Autocomplete } from '@mui/material'
import { Box } from '@mui/system'
import FormHeader from 'components/form/FormHeader'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useFileUpload from 'hooks/useFileUpload';
import useFirebase from 'hooks/useFirebase';
import useModal from 'hooks/useModal';
const UploadCsvForm = (props) => {

    const { handleCsvFileUpload, file, pending, url, readyToSubmit } = useFileUpload()
    const { uploadCsvTransactions } = useFirebase()
    const { handleModalClose } = useModal()

    const handleCSVUpload = async (e) => {
        await handleCsvFileUpload(
                e, 
                `csvFiles/${props.portfolioId}`
            )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await uploadCsvTransactions(url, props.portfolioId)
        handleModalClose()
    }


    const source = [
        { label: 'Shakepay'},
        { label: 'Bull Bitcoin'},
        { label: 'Custom'},

    ] 

    return (
        <Box component='form' sx={wrapper} onSubmit={handleSubmit}>
            <FormHeader heading='Upload CSV' />
            <Autocomplete
                options={source}
                renderInput={(params) => <TextField {...params} label='Data Source' />}
            />
            <Button
                variant='contained'
                component='label'
                startIcon={<CloudUploadIcon />}
                sx={buttonStyle}
            >
                Upload CSV
                <input
                    type='file'
                    onChange={handleCSVUpload}
                    hidden
                />
            </Button>
            {pending && <LinearProgress />}
            <Typography variant='caption'>{file.name}</Typography>
            <Button variant='contained' type='submit' disabled={!readyToSubmit}>Submit</Button>
        </Box>
    )
}

export default UploadCsvForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    padding: '1rem',
}

const buttonStyle = {
    backgroundColor: 'rgba(145, 158, 171, 0.16)',
    boxShadow: 'none',
    minHeight: '150px',
    border: '1px dashed rgba(145, 158, 171, 0.32)',
    '&:hover': {
        backgroundColor: 'rgba(145, 158, 171, 0.16)',
        boxShadow: 'none',
        opacity: 0.72,
    }
}