import React from 'react'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CalculatorHeader = (props) => {
    return (
        <Box sx={{...wrapper, ...props.sx}}>
            <PageTitle>{props.title}</PageTitle>
            <Box sx={buttonGroup}>
                <Button
                    onClick={props.toggleDrawer}
                    startIcon={<EditIcon />}
                    disabled={props.open}
                >
                    Edit Details
                </Button>
                <Button
                    startIcon={<ContentCopyIcon />}
                >
                    Clone
                </Button>
            </Box>
        </Box>
    )
}

export default CalculatorHeader

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '0 0 1rem 0',
    '@media (max-width: 1024px)': {
        gridTemplateColumns: '1fr',
        gap: '1rem',
        textAlign: 'center'
    }
}

const buttonGroup = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '1rem',

    '@media (max-width: 1024px)': {
        justifyContent: 'center'
    }
}