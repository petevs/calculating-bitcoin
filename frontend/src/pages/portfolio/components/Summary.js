import Scorecard from 'components/Scorecard'
import { Box } from '@mui/system'

const Summary = () => {
    return (
        <Box sx={wrapper}>
            <Scorecard
                title='Total Invested'
                value={234000}
                numberFormat={{
                    thousandSeparator: true,
                    prefix: '$'
                }}
            />
        </Box>
    )
}

export default Summary

const wrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',

    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
}