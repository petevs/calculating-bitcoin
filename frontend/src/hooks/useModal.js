import { useContext } from 'react'
import { setModalContent, toggleModal } from 'state/app/appActions'
import GlobalContext from 'state/GlobalContext'

const useModal = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const { modalOpen, modalContent } = state.app

    const handleModalOpen = (content) => {
        dispatch(setModalContent(content))
        dispatch(toggleModal(true))
    }

    const handleModalClose = () => {
        dispatch(toggleModal(false))
    }

    const handleModalToggle = () => {
        dispatch(toggleModal())
    }

    return { modalOpen, modalContent, handleModalOpen, handleModalClose, handleModalToggle }

}

export default useModal
