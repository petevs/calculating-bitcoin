import { CardActionArea, Card, CardContent, Typography } from '@mui/material/';
import { Link } from 'react-router-dom'

const ListCard = (props) => {
    return (
        <Card sx={{backgroundColor: '#212B36', maxWidth: 275, boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px'}}>
            <CardActionArea
                sx={{height: '100%', padding: '.5rem'}}
                component={Link}
                to={`${props.to}`}
            >
                <CardContent>
                    <Typography sx={headingStyle} variant='h6'>{props.title}</Typography>
                    <Typography variant='body-2' sx={{fontSize: '.875rem'}}>{props.description || 'No Description'}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ListCard

const headingStyle = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
    paddingBottom: '.5rem',
    marginBottom: '.5rem',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'capitalize',
}