import { Box } from '@mui/system'
import React from 'react'
import EditTransaction from './EditTransaction'

const TransactionRow = (props) => {

    const columns = Object.keys(props)



    return (
        <Box sx={{display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`}}>
            {
                columns.map(item => 
                    <Box sx={{color: '#FFF'}}>
                        {props[item]}
                    </Box>
                    )
            }
            <EditTransaction {...props}/>
        </Box>
    )
}

export default TransactionRow
