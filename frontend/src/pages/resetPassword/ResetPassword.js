import FormBox from 'components/form/FormBox'
import ResetPasswordForm from './components/ResetPasswordForm'
import ResetPasswordConfirmation from './components/ResetPasswordConfirmation'
import Page from 'components/Page'
import { Route } from 'react-router'

const ResetPassword = () => {

    return (
        <Page>
            <FormBox>
                <Route exact path='/reset-password' component={ResetPasswordForm} />
                <Route path='/reset-password/2' component={ResetPasswordConfirmation} />
            </FormBox>
        </Page>
    )
}

export default ResetPassword
