import { iconButtonClasses, Modal } from '@mui/material'
import { Box } from '@mui/system'
import useModal from 'hooks/useModal'
import React from 'react'
import { useMediaQuery, IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MainModal = (props) => {

    const { modalOpen, modalContent, handleModalClose } = useModal()

    const mobile = useMediaQuery('(max-width:768px')

    return (
        <Modal
            open={props.open || modalOpen}
            onClose={props.onClose || handleModalClose}
            disableEnforceFocus
            disableAutoFocus
            sx={{
                zIndex: 1201,
                overflowY: 'scroll'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: 'rgb(33, 43, 54)',
                    border: '1px solid rgba(145, 158, 171, 0.08)',
                    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px',
                    p: 4,
                    color: '#fff',
                    padding: '1rem',
                    borderRadius: '6px',
                    overflowY: 'scroll',
                    '@media (max-width: 640px)': {
                        width: '100%',
                        height: '100%',
                        borderTop: '1px solid #fff',
                        borderRadius: 0,
                        border: 'none',
                    }
                }}
            >
                {modalContent}
            </Box>
            
        </Modal>
    )
}

export default MainModal

