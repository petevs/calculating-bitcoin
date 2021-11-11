import { Button } from '@mui/material';
import useModal from 'hooks/useModal';

const ModalButton = (props) => {

    const { handleModalOpen } = useModal()

    return (
        <Button
            {...props}
            startIcon={props.icon}
            onClick={() => handleModalOpen(
                props.content
            )}
        >
            {props.text}
        </Button>
    )
}

export default ModalButton