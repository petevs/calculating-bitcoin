import { Box } from "@mui/system"

const FormBox = (props) => {
    return (
        <Box
            component="form"
            autoComplete='off'
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                padding: '2rem',
                gap: '1rem',
                minWidth: '400px',
                maxWidth: '480px',
                backgroundColor: 'rgb(33, 43, 54)',
                color: 'rgb(255, 255, 255)',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px'
            }}
            {...props}
        >
            {props.children}
        </Box>
    )
}

export default FormBox
