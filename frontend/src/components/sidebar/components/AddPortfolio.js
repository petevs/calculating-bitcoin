import React from 'react'
import { Button } from '@mui/material'
import useModal from 'hooks/useModal'
import AddPortfolioForm from 'components/AddPortfolioForm'

const AddPortfolio = () => {

    const { handleModalOpen } = useModal()

    return (
        <>
            <Button onClick={() => handleModalOpen(
                    <AddPortfolioForm />
                )}
            >
                Add Portfolio
            </Button>
        </>
    )
}

export default AddPortfolio
