import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import { TextField, InputAdornment, Button, Typography } from '@mui/material'
import FormBox from 'components/form/FormBox'
import FormHeader from 'components/form/FormHeader'
import ArrowRow from './ArrowRow'
import AddIcon from '@mui/icons-material/Add';

const RetirementForm = ({state, dispatch, updateValue}) => {


    return (
        <>
        <FormBox>
            <FormHeader heading='Enter Details' />
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem'}}>
                <NumberFormat
                    label='Current Age'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 100
                    }}
                    value={state.currentAge}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'currentAge', 
                            value: e.floatValue
                        })
                        )}
                />
                <NumberFormat
                    label='Retirement Age'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                    value={state.retirementAge}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'retirementAge', 
                            value: e.floatValue
                        })
                        )}
                />
                <NumberFormat
                    label='Age of Death'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                    value={state.ageOfDeath}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'ageOfDeath', 
                            value: e.floatValue
                        })
                        )}
                />
            </Box>
            {/* <NumberFormat
                label='Current Bitcoin Holdings'
                customInput={TextField}
                inputProps={{type: 'numeric'}}
                InputProps={{
                    endAdornment: (<InputAdornment position='start'>
                        BTC
                    </InputAdornment>),
                }}
                decimalScale={8}
                fixedDecimalScale={8}
                value={state.currentBitcoinHoldings}
                onValueChange={(e) => dispatch(
                    updateValue({
                        name: 'currentBitcoinHoldings', 
                        value: e.floatValue
                    })
                    )}
            />
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <NumberFormat
                    label='Bitcoin Yearly Growth Rate'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    InputProps={{
                        endAdornment: (<InputAdornment position='start'>
                            %
                        </InputAdornment>),
                    }}
                    decimalScale={0}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                    value={state.bitcoinYearlyGrowthRate}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'bitcoinYearlyGrowthRate', 
                            value: e.floatValue
                        })
                        )}
                />
                <NumberFormat
                    label='Annual Inflation Rate'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    InputProps={{
                        endAdornment: (<InputAdornment position='start'>
                            %
                        </InputAdornment>),
                    }}
                    decimalScale={0}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 100
                    }}
                    value={state.annualInflationRate}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'annualInflationRate', 
                            value: e.floatValue
                        })
                        )}
                />
            </Box> */}
            <NumberFormat
                label="Required Yearly Retirement Income (In Today's Dollars Before Tax)"
                customInput={TextField}
                inputProps={{type: 'numeric'}}
                InputProps={{
                    startAdornment: (<InputAdornment position='start'>
                        $
                    </InputAdornment>),
                }}
                thousandSeparator={true}
                value={state.requiredYearlyIncome}
                onValueChange={(e) => dispatch(
                    updateValue({
                        name: 'requiredYearlyIncome', 
                        value: e.floatValue
                    })
                    )}
            />
            <Button size='large' variant='contained'>Calculate</Button>
        </FormBox>

        <Box sx={boxStyle}>
            <Typography variant='body-2' sx={{color: '#fff'}}>Starting Year:</Typography>
            <Box sx={{display: 'grid', gridAutoFlow: 'column', gap: '1rem', marginTop: '1rem'}}>
                <NumberFormat
                    label='End of Year'
                    customInput={TextField}
                    value={2021}
                />
                <NumberFormat
                    label='Bitcoin Annual Growth Rate'
                    customInput={TextField}
                    value={58}
                    suffix='%'
                />
                <NumberFormat
                    label='Inflation Rate'
                    customInput={TextField}
                    suffix='%'
                    value={6}
                />
                <NumberFormat
                    label='Bitcoin Price'
                    customInput={TextField}
                    value={125000}
                    prefix='$'
                    thousandSeparator={true}
                />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center', margin: '.75rem 0'}}>
                <Button size='small' startIcon={<AddIcon />} sx={{border: '1px dotted rgb(145,158,171)'}}> Add Row </Button>
            </Box>
            <ArrowRow />
            <Typography variant='body-2' sx={{color: '#fff'}}>Year of Retirement:</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem'}}>
                <NumberFormat
                    label='End of Year'
                    customInput={TextField}
                    value={2056}
                />
                <NumberFormat
                    label='Bitcoin Annual Growth Rate'
                    customInput={TextField}
                    value={58}
                    suffix='%'
                />
                <NumberFormat
                    label='Annual Inflation Rate'
                    customInput={TextField}
                    suffix='%'
                    value={6}
                />
                <NumberFormat
                    label='Bitcoin Price Estimate'
                    customInput={TextField}
                    value={125000}
                    prefix='$'
                    thousandSeparator={true}
                />
            </Box>
            <ArrowRow />
        </Box>
        </>
    )
}

export default RetirementForm

const boxStyle = {
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '2rem',
    color: '#fff',
}