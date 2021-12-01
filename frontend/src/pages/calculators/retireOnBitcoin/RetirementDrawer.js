import { useState } from 'react'
import { Drawer, IconButton, Typography } from '@mui/material'
import RetirementForm from './RetirementForm'
import { Box } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const RetirementDrawer = ({state, dispatch, updateValue, updateStatus, updateResults, open, toggleDrawer}) => {

    return (
        <>
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                right: open ? '10px' : '0px',
                backgroundColor: 'rgb(33, 43, 54)',
                boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 4px 0px, rgb(0 0 0 / 24%) 0px 24px 48px 0px',
                borderRadius: '20px 0 0 20px',
                padding: '.5rem',
                transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
            }}
        >
            <IconButton 
                size='large'
                onClick={toggleDrawer}
            >
                <EditIcon />
            </IconButton>

        </Box>
        <Drawer
            anchor={'right'}
            open={open}
            variant={'persistent'}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '300px',
                    top: '75px',
                    right: '10px',
                    backgroundColor: 'rgb(33, 43, 54)',
                    borderRadius: '8px',
                    backgroundImage: 'none',
                    color: 'rgb(145,158,171)',
                    borderRight: '1px solid rgba(145, 158, 171, 0.24)',
                    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 4px 0px, rgb(0 0 0 / 24%) 0px 24px 48px 0px',
                    height: 'calc(100% - 175px)'
                }
                }}
                BackdropProps={{ invisible: true }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    color: '#fff', 
                    padding: '1rem', 
                    borderBottom: '1px solid rgba(145, 158, 171, 0.24)'
                }}
            >
                <Typography 
                >
                    Edit Details
                </Typography>
                <IconButton 
                    size='small'
                    onClick={toggleDrawer} 
                    sx={{
                        '& svg': {
                            height: '1rem', 
                            width: '1rem'
                        }}}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <RetirementForm 
                state={state} 
                dispatch={dispatch} 
                updateValue={updateValue}
                updateStatus={updateStatus}
                updateResults={updateResults} 
            />
        </Drawer>
        </>
    )
}

export default RetirementDrawer
