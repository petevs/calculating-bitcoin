
import NumberFormat from 'react-number-format'
import { Box } from '@mui/system'
import { TextField, InputAdornment, Typography} from '@mui/material'

const NowUntilRetirement = ({state, dispatch, updateValue}) => {
    return (
        <>
    <Box sx={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', padding: '1rem'}}>
        <Typography sx={{fontSize: '1rem', fontWeight: '700'}}>Expectations {`(2021-2041)`}</Typography>
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
                size='small'
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
            size='small'
        />
        </Box>
        </>
    )
}

export default NowUntilRetirement
