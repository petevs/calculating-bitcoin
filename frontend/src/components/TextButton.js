import { Button } from '@mui/material'
import React from 'react'

const TextButton = (props) => {
    return (
        <Button
            {...props}
            sx={{
                textTransform: 'none',
                justifySelf: 'center',
            }}
        >
            {props.children}
        </Button>
    )
}

export default TextButton
