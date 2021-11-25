import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import { TextField, InputAdornment, Button, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material'
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
            /> */}
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
            Calculate Using: 
            <ToggleButtonGroup
                    size='small'
                    value='priceTarget'
            >
                <ToggleButton value='priceTarget'>Bitcoin Price Target</ToggleButton>
                <ToggleButton value='growthRate'>Bitcoin Growth Rate</ToggleButton>
            </ToggleButtonGroup>
            Now Until Retirement {`(${state.currentYear} - ${state.yearOfRetirement()})`}:
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
                    value={state.bitcoinGrowthRateUntilRetirement}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'bitcoinGrowthRateUntilRetirement', 
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
                    value={state.inflationUntilRetirement}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'inflationUntilRetirement', 
                            value: e.floatValue
                        })
                        )}
                />
                </Box>
                At Retirement: 
                <NumberFormat
                    label={`Estimated Bitcoin Price in ${state.yearOfRetirement()}`}
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            $
                        </InputAdornment>),
                    }}
                    decimalScale={0}
                    thousandSeparator={true}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0
                    }}
                    value={state.bitcoinPriceAtRetirement}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'bitcoinPriceAtRetirement', 
                            value: e.floatValue
                        })
                        )}
                />
            During Retirement {`(${state.yearOfRetirement()} - ${state.yearOfDeath()})`}: 
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
                    value={state.inflationAfterRetirement}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'inflationAfterRetirement', 
                            value: e.floatValue
                        })
                        )}
                />
            </Box>
        </FormBox>

        </>
    )
}

export default RetirementForm