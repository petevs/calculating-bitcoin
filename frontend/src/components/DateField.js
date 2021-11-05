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
        handleChange,
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
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            :   <DesktopDatePicker
                    disableFuture
                    label={label}
                    name={name}
                    minDate={minDate}
                    maxDate={maxDate}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
        }
        </>
    )
}

export default DateField