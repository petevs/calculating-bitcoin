import { Box } from '@mui/system'
import RealizedSummary from './RealizedSummary'
import SummarySelect from './SummarySelect'
import UnrealizedSummary from './UnrealizedSummary'

const Summary = (props) => {

    return (
        <Box>
            <SummarySelect handlePerformanceChange={props.handlePerformanceChange} performanceType={props.performanceType} />
            <Box sx={wrapper}>
                {
                    props.performanceType === 'Unrealized Performance'
                    ? <UnrealizedSummary {...props} />
                    : <RealizedSummary {...props} />
                }
            </Box>
        </Box>
    )
}

export default Summary

const wrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
    gap: '1rem',

    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
}