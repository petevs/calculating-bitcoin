import { useState } from 'react'
import { Tabs, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { TabPanel } from '@mui/lab'

const PortfolioTabs = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    const TabPanel = (props) => {

        const { children, value, index, ...other } = props
        return (
            <Box 
                hidden={value !== index}
                {...other}
            >
                {value === index &&     
                    <Box>
                        {children}
                    </Box>
                }
            </Box>
        )
    }

    return (
        <Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab label='Market Weighted Return' />
                <Tab label='Transactions' />
            </Tabs>
            <TabPanel value={value} index={0}>
                Market Weighted Return
            </TabPanel>
            <TabPanel value={value} index={1}>
                Transactions
            </TabPanel>
        </Box>
    )
}

export default PortfolioTabs
