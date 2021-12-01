import RetirementGoals from './RetirementGoals'
import NowUntilRetirement from './NowUntilRetirement'
import DuringRetirement from './DuringRetirement'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'


const RetirementForm = (props) => {

    console.log(props.state)

    return (
        <Box sx={{display: 'grid', gap: '2rem', padding: '1rem'}}>
            <RetirementGoals {...props} />
            <NowUntilRetirement {...props} />
            <DuringRetirement {...props} />
            <Box sx={{display: 'grid', gap: '1rem'}}>
                <Button variant='contained' size='small' disabled={!props.state.editing} onClick={props.updateCalculation}>Update</Button>
                <Button variant='outlined' size='small' disabled={!props.state.editing} onClick={() => props.dispatch(props.cancelChanges())}>Cancel</Button>
            </Box>
        </Box>
    )
}

export default RetirementForm