import RetirementGoals from './RetirementGoals'
import NowUntilRetirement from './NowUntilRetirement'
import DuringRetirement from './DuringRetirement'
import { Box } from '@mui/system'

const RetirementForm = (props) => {


    return (
        <Box sx={{display: 'grid', gap: '2rem', padding: '1rem'}}>
            <RetirementGoals {...props} />
            <NowUntilRetirement {...props} />
            <DuringRetirement {...props} />
        </Box>
    )
}

export default RetirementForm