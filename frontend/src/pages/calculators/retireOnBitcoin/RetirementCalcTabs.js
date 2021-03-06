import { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import { Box } from '@mui/system'

const RetirementCalcTabs = ({ tabs }) => {

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
                sx={{display: 'grid', gridTemplateColumns: '1fr', padding: value !== index ? '0' : '2rem 1rem'}}
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
        <Box sx={tabsStyle}>
            <Tabs value={value} onChange={handleChange} variant='scrollable'>
                {
                    tabs.map(tab => <Tab key={tab.key} label={tab.title} />)
                }
            </Tabs>
                {
                    tabs.map((tab,idx) => <TabPanel key={tab.key} value={value} index={idx}>{tab.content}</TabPanel>)
                }
        </Box>
    )
}

export default RetirementCalcTabs


const tabsStyle = {
    display: 'grid', 
    gridTemplateColumns: '1fr',
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '2rem',
}