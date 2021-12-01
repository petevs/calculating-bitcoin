import RetirementGoals from './RetirementGoals'
import NowUntilRetirement from './NowUntilRetirement'
import DuringRetirement from './DuringRetirement'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { calculateRetirement } from './calculateRetirement'

const RetirementForm = (props) => {

    const updateResults = () => {
        props.dispatch(props.updateStatus('calculating'))
        const results = calculateRetirement(props.state)
        props.dispatch(props.updateResults(results))
    }



    return (
        <Box sx={{display: 'grid', gap: '2rem', padding: '1rem'}}>
            <RetirementGoals {...props} />
            <NowUntilRetirement {...props} />
            <DuringRetirement {...props} />
            <Button variant='contained' onClick={updateResults}>Update</Button>
            <Button variant='outlined'>Cancel</Button>
        </Box>
    )
}

export default RetirementForm