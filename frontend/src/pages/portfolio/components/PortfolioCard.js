import { CardActionArea, Card, CardContent, Typography } from '@mui/material/';
import { Link } from 'react-router-dom'

const PortfolioCard = (props) => {
    return (
        <Card sx={{backgroundColor: '#212B36'}}>
            <CardActionArea
                component={Link}
                to={`/portfolio/${props.id}`}
            >
            <CardContent>
                <Typography sx={headingStyle} variant='h6'>{props.portfolioName}</Typography>
                <Typography variant='body-2'>{props.portfolioDescription || 'No Description'}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}

export default PortfolioCard

const headingStyle = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
    marginBottom: '.5rem',
    fontSize: '1rem',
    fontWeight: 700,
}