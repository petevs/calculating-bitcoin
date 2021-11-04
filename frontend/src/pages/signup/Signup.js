import DefaultLayout from "layouts/DefaultLayout"
import { Box } from "@mui/system"
import SignupForm from './components/SignupForm'


const Signup = () => {

    return(
        <DefaultLayout>
            <Box
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    minHeight: 'calc(100vh - 128px)',
                    alignItems: 'center'
                }}
            >
                <SignupForm />
            </Box>
        </DefaultLayout>
    )
}

export default Signup
