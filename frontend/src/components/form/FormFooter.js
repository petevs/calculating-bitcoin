import { Divider, Box, Typography } from "@mui/material"
import TextButton from "components/TextButton"
import { Link } from 'react-router-dom'

const FormFooter = ({heading, buttonText, to}) => {
    return (
        <>
            <Divider />

            <Box
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    gap: '.25rem'
                }}
            >
                <Typography variant='body2' sx={{textAlign: 'center'}}>
                    {heading}
                </Typography>
                <TextButton
                    component={Link} to={to} size='small'>
                    {buttonText}
                </TextButton>
            </Box>
        </>
    )
}

export default FormFooter
