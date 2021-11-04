import { Button } from '@mui/material'
import React from 'react'

const PrimaryButton = (props) => {

    return (
        <Button
            sx={{
                fontWeight: '600',
                textTransform: 'none',
            }}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default PrimaryButton
