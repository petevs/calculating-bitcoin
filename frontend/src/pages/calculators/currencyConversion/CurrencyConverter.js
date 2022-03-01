import { useEffect, useState} from 'react'
import Page from 'components/Page'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import NumberFormat from 'react-number-format'
import { TextField, MenuItem, Button, Typography, CircularProgress } from '@mui/material'
import axios from 'axios'
import Currency from 'components/Currency'

const CurrencyConverter = () => {

    // useEffect(() => {

    //     const getResults = async () => {
    //         const { data } = await axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=a92a4ea0-59fa-11ec-a998-31c751871727')
    //         console.log(data)
    //     }

    //     getResults()

    // }, [])

    const [from, setFrom] = useState('USD')
    const [fromAmount, setFromAmount] = useState(0)
    const [result, setResult] = useState(0)
    const [fxRate, setFxRate] = useState()
    const [calculating, setCalculating] = useState(false)

    const to = () => {
        if(from === 'USD'){
            return 'CAD'
        }

        return 'USD'
    }



    const convert = async () => {
        setCalculating(true)
        const { data } = await axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=a92a4ea0-59fa-11ec-a998-31c751871727&base_currency=${from}`)
        const exchangeRate = data.data[to()]
        setFxRate(exchangeRate)
        setResult(exchangeRate * fromAmount)
        setCalculating(false)
    }


    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem', color: '#fff'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Fiat Currency Converter</PageTitle>
            </Box>
            <TextField
                select
                label='From'
                value={from}
                onChange={(e) => setFrom(e.target.value)}
            >
                <MenuItem value='CAD'>CAD</MenuItem>
                <MenuItem value='USD'>USD</MenuItem>
            </TextField>
            <NumberFormat
                customInput={TextField}
                label='Amount'
                prefix='$'
                thousandSeparator={true}
                value={fromAmount}
                onValueChange={(e) => setFromAmount(e.floatValue)}
            />
            <Button variant='contained' onClick={() => convert()}>Convert</Button>
            <Typography variant='h2' sx={{color: '#fff'}}>
                {calculating ? <CircularProgress /> : <> <Currency value={result} /> <span style={{fontSize: '.875rem'}}>Exchange Rate: {fxRate}</span> </>}
            </Typography>
        </Page>
    )
}

export default CurrencyConverter
