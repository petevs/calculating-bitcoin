import { Divider } from "@mui/material"

const CenterTextDivider = (props) => {
    return (
        <Divider
            sx={{
                '&::before': {
                    top: 0,
                },
                '&::after': {
                    top: 0,
                },
                fontSize: '.875rem',
                color: 'rgb(145, 158, 171)'
            }}
            {...props}
        >
            {props.children}
        </Divider>
    )
}

export default CenterTextDivider
