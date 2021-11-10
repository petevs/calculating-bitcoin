import React from 'react'
import DefaultLayout from 'layouts/DefaultLayout'
import { Box } from '@mui/system'

const Page = ({sx, children}) => {
    return (
        <DefaultLayout>
            <Box
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    minHeight: 'calc(100vh - 128px)',
                    alignItems: 'center',
                    ...sx
                }}
            >
                {children}
            </Box>
        </DefaultLayout>
    )
}

export default Page
