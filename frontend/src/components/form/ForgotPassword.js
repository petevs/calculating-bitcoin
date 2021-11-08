import TextButton from "components/TextButton"
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <TextButton
            component={Link}
            to='/reset-password'
            size='small'
        >
            Forgot Password?
        </TextButton>
    )
}

export default ForgotPassword
