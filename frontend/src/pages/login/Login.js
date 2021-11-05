import DefaultLayout from "layouts/DefaultLayout"
import LoginForm from "./components/LoginForm"
import { Box } from "@mui/system"

const Login = () => {

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
                <LoginForm />
            </Box>
        </DefaultLayout>
    )
}

export default Login
