import React from 'react'
import { Box } from '@mui/system'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ArrowRow = () => {

    console.log(Array(4))
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
            {
                [...Array(4)].map((i) => 
                    <Box sx={style}>
                        <ArrowDownwardIcon />
                    </Box>
                )
            }
        </Box>
    )
}

export default ArrowRow

const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '0 1rem 1rem',
    justifyItems: 'center',
    '& svg': {
        color: 'rgb(145,158,171)'
    },
}