import RetirementGoals from './RetirementGoals'
import NowUntilRetirement from './NowUntilRetirement'
import AtRetirement from './AtRetirement'
import DuringRetirement from './DuringRetirement'
import { Box } from '@mui/system'
import RetirementCalcTabs from './RetirementCalcTabs'

const RetirementForm = (props) => {


    return (
        <Box sx={{display: 'grid', gap: '1rem'}}>
            <RetirementGoals {...props} />
            <RetirementCalcTabs
                tabs={[
                    {
                        key: 1, 
                        title: 'Now Until Retirement', 
                        content: <NowUntilRetirement {...props} />
                    },
                    {
                        key: 2,
                        title: 'At Retirement',
                        content: <AtRetirement {...props} />
                    },
                    {
                        key: 3,
                        title: 'During Retirement',
                        content: <DuringRetirement {...props} />
                    }
                ]}
            />
    
        </Box>
    )
}

export default RetirementForm