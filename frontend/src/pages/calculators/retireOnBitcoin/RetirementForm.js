import RetirementGoals from './RetirementGoals'
import NowUntilRetirement from './NowUntilRetirement'
import AtRetirement from './AtRetirement'
import DuringRetirement from './DuringRetirement'
import { Box } from '@mui/system'

const RetirementForm = (props) => {


    return (
        <Box sx={{display: 'grid', gap: '1rem'}}>
            <RetirementGoals {...props} />
            <NowUntilRetirement {...props} />
            <AtRetirement {...props} />
            <DuringRetirement {...props} />
        </Box>
    )
}

export default RetirementForm