import React from 'react'
import { Button } from '@mui/material'
import useModal from 'hooks/useModal'
import PortfolioForm from 'components/PortfolioForm'

const AddPortfolio = () => {

    const { handleModalOpen } = useModal()

    return (
        <>
            <Button onClick={() => handleModalOpen(
                    <PortfolioForm title='Add Portfolio' />
                )}
            >
                Add Portfolio
            </Button>
        </>
    )
}

export default AddPortfolio
