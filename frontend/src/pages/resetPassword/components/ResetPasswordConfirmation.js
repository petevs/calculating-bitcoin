import FormHeader from "components/form/FormHeader"
import TextButton from "components/TextButton"
import { Link } from 'react-router-dom'

const ResetPasswordConfirmation = () => {
    return (
        <>
            <FormHeader heading='Reset Your Password' sx={{gap: '1rem'}}>
            <p>We sent you a link that will reset your password.</p>
            </FormHeader>
            <TextButton component={Link} to='/login'>Back to Log in</TextButton>
        </>
    )
}

export default ResetPasswordConfirmation
