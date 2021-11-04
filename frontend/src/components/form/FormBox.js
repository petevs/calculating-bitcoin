import { Box } from "@mui/system"

const FormBox = (props) => {
    return (
        <Box
            component="form"
            autoComplete='off'
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                padding: '1rem',
                gap: '1rem'
            }}
            {...props}
        >
            {props.children}
        </Box>
    )
}

export default FormBox
