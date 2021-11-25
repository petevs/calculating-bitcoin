import { useState }from 'react'
import {Box} from '@mui/system'
import NumberFormat from 'react-number-format'
import { TextField } from '@mui/material'

const Forecast = () => {

    const initialRows = [
        {
            year: 2021,
            growthRate: null,
            inflationRate: null,
            bitcoinPrice: 125000
        }
    ]

    const [rows, setRows] = useState(initialRows)



    return (
        <div>
            <Box>
                <NumberFormat
                    label='From'
                    customInput={TextField}
                />
            </Box>
            {rows.map(row => 
                <Box>
                    {row.year}
                </Box>
            )}
        </div>
    )
}

export default Forecast
