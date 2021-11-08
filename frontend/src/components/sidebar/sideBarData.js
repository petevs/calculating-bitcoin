import CalculateIcon from '@mui/icons-material/Calculate';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export const sideBarData = [
    {
        title: 'Portfolios',
        icon: <LibraryBooksIcon />,
        data: []
    },
    {
        title: 'Calculators',
        icon: <CalculateIcon />,
        data: [
            {text: 'Dollar Cost Average', path: '/'},
            {text: 'Retire on Bitcoin', path: '/'},
            {text: 'Speculative Attack', path: '/'},
        ]
    
    }
]