import React from 'react'
import { Button } from '@mui/material'
import CenterTextDivider from './CenterTextDivider'
import useAuth from 'hooks/useAuth'


const ContinueAsGuest = () => {


    const { continueAsGuest } = useAuth()

    return (
        <>
            <Button
                variant='outlined'
                sx={{
                    textTransform: 'none'
                }}
                onClick={continueAsGuest}
                size='large'
            >
                Continue as Guest
            </Button>
            <CenterTextDivider>OR</CenterTextDivider>
        </>
    )
}

export default ContinueAsGuest
