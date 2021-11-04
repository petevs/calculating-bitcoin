import { Box } from "@mui/system"
import { Button, Typography } from "@mui/material"
import CenterTextDivider from "./CenterTextDivider"
import useAuth from "hooks/useAuth"

const FormHeader = ({heading}) => {

    const { continueAsGuest } = useAuth()

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                paddingBottom: '.5rem'
            }}
        >
                <Typography variant='h5' sx={{fontWeight: 700}}>{heading}</Typography>
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
        </Box>
    )
}

export default FormHeader
