import PrimaryButton from "components/PrimaryButton"

const FormSubmit = (props) => {
    return (
        <PrimaryButton
            variant='contained'
            size='large'
            color='primary'
            {...props}
        >
            {props.children}
        </PrimaryButton>
    )
}

export default FormSubmit
