import { DesktopDatePicker, MobileDatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import { useMediaQuery } from '@mui/material'


const DateField = (props) => {

    const {
        label,
        name,
        minDate,
        maxDate,
        value,
        onChange,
    } = props


    const mobile = useMediaQuery('(max-width: 768px)')


    return (
        <>
        {
            mobile
            ?   <MobileDatePicker
                    disableFuture
                    label={label}
                    name={name}
                    minDate={minDate}
                    maxDate={maxDate}
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                    {...props.params}
                />
            :   <DesktopDatePicker
                    disableFuture
                    label={label}
                    name={name}
                    minDate={minDate}
                    maxDate={maxDate}
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                    {...props.params}
                />
        }
        </>
    )
}

export default DateField