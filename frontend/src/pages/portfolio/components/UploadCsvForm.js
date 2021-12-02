import { Button, LinearProgress, TextField, Typography, Autocomplete, Link } from '@mui/material'
import { Box } from '@mui/system'
import FormHeader from 'components/form/FormHeader'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useFileUpload from 'hooks/useFileUpload';
import useFirebase from 'hooks/useFirebase';
import useModal from 'hooks/useModal';
import { useState } from 'react'

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

    const [ source, setSource ] = useState('')

    const sources = ['Shakepay CSV', 'Bull Bitcoin CSV', 'Bitbuy CSV', 'Coinbase CSV', 'Blockfi CSV', 'Custom CSV'] 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await uploadCsvTransactions(url, props.portfolioId, source)
        handleModalClose()
    }

    return (
        <Box component='form' sx={wrapper} onSubmit={handleSubmit}>
            <FormHeader heading='Upload CSV' />
            <Autocomplete
                value={source}
                onChange={(event, newValue) => {
                    setSource(newValue)
                }}
                options={sources}
                renderInput={(params) => <TextField {...params} label='Data Source' />}
            />
            {
                source === 'Custom CSV' && 
                <Link
                    underline='hover' 
                    sx={linkStyle}
                    href='https://firebasestorage.googleapis.com/v0/b/calculatingbitcoin.appspot.com/o/Sample_Template.csv?alt=media&token=8546429e-a5b2-4cd7-9bf8-b4228d20e4b7'
                >
                Download Sample Template
                </Link>
            }
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
            <Button variant='contained' size='large' type='submit' disabled={!readyToSubmit}>Submit</Button>
            <Button variant='outlined' size='large' onClick={handleModalClose}>Cancel</Button>
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

const linkStyle = {
    fontSize: '.75rem'
}