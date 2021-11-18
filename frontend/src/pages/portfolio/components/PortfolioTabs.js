import { useState } from 'react'
import { Tabs, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { TabPanel } from '@mui/lab'

const PortfolioTabs = ({ tabs }) => {

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
                sx={{padding: '2rem 1rem'}}
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
                {
                    tabs.map(tab => <Tab label={tab.title} />)
                }
            </Tabs>
                {
                    tabs.map((tab,idx) => <TabPanel value={value} index={idx}>{tab.content}</TabPanel>)
                }
        </Box>
    )
}

export default PortfolioTabs
