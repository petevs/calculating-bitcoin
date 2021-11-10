import { Button } from '@mui/material';
import useModal from 'hooks/useModal';

const ModalButton = ({icon, content, text}) => {

    const { handleModalOpen } = useModal()

    return (
        <Button
            startIcon={icon}
            onClick={() => handleModalOpen(
                content
            )}
        >
            {text}
        </Button>
    )
}

export default ModalButton