import { Box } from "@mui/system"
import { Typography } from "@mui/material"

const FormHeader = ({heading, children, sx}) => {


    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                paddingBottom: '.5rem',
                ...sx
            }}
        >
                <Typography variant='h5' sx={{fontWeight: 700}}>{heading}</Typography>
                {children}
        </Box>
    )
}

export default FormHeader
