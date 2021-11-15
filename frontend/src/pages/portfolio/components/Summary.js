import { Box } from '@mui/system'
import RealizedSummary from './RealizedSummary'
import SummarySelect from './SummarySelect'
import TotalPerformance from './TotalPerformance'
import UnrealizedSummary from './UnrealizedSummary'

const Summary = (props) => {


    const renderSwitch = () => {
        switch(props.performanceType) {
            case 'Unrealized Performance':
                return <UnrealizedSummary {...props} />
            case 'Realized Performance':
                return <RealizedSummary {...props} />
            default:
                return <TotalPerformance {...props} />
        }
    }

    return (
        <Box>
            <SummarySelect 
                handlePerformanceChange={props.handlePerformanceChange} 
                performanceType={props.performanceType} 
            />
            <Box sx={wrapper}>
                {renderSwitch()}
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