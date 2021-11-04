import { useContext } from 'react'
import { setModalContent, toggleModal } from 'state/actions/appActions'
import GlobalContext from 'state/contexts/GlobalContext'

const useModal = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const { modalOpen } = state.app

    const handleOpen = (content) => {
        dispatch(setModalContent(content))
        dispatch(toggleModal(true))
    }

    const handleClose = () => {
        dispatch(toggleModal(false))
    }

    const handleModalToggle = () => {
        dispatch(toggleModal())
    }

    return { modalOpen, handleOpen, handleClose, handleModalToggle }

}

export default useModal
