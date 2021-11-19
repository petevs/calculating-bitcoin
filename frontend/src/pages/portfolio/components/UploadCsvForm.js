import { Button, LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FormHeader from 'components/form/FormHeader'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useFileUpload from 'hooks/useFileUpload';
import useFirebase from 'hooks/useFirebase';

const UploadCsvForm = (props) => {

    const { handleFileUploadOneStep, file, pending } = useFileUpload()
    const { uploadCsvTransactions } = useFirebase()

    const handleCSVUpload = async (e) => {
        await handleFileUploadOneStep(
                e, 
                `csvFiles/${props.portfolioId}`, 
                uploadCsvTransactions
            )
    }


    return (
        <Box component='form' sx={wrapper}>
            <FormHeader heading='Upload CSV' />
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
            <Button variant='contained' disabled>Submit</Button>
        </Box>
    )
}

export default UploadCsvForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    padding: '1rem',
    '& .MuiDropzoneArea-root': {
        minHeight: '150px',
        backgroundColor: 'rgba(145, 158, 171, 0.16)',
        border: '1px dashed rgba(145, 158, 171, 0.32)',
        borderRadius: '8px',
        '& svg': {
            color: '#fff'
        }
    },
    '& .MuiDropzoneArea-text': {
        fontSize: '1rem',
    }
}

const buttonStyle = {
    backgroundColor: 'rgba(145, 158, 171, 0.16)',
    border: '1px dashed rgba(145, 158, 171, 0.32)',
    boxShadow: 'none',
    minHeight: '150px',
    '&:hover': {
        backgroundColor: 'rgba(145, 158, 171, 0.16)',
        boxShadow: 'none',
        opacity: 0.72,
    }
}