import SideBarList from './SideBarList';
import GlobalContext from 'state/GlobalContext';
import { useContext } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddPortfolio from './AddPortfolio';


const SideBarMenu = () => {

    const { state } = useContext(GlobalContext)

    const menu = [
        {
            title: 'Portfolios',
            icon: <LibraryBooksIcon />,
            data: state.portfolio.portfolioList().map(item => {
                return {
                    text: item.portfolioName, 
                    to: `/portfolio/${item.id}`
                    }
                })
        },
        // {
        //     title: 'Calculators',
        //     icon: <CalculateIcon />,
        //     data: [{
        //         text: 'Retirement Calculator',
        //         to: `/calculators`
        //     }]
        // }
    ]
    

    return (
        <>
            {menu.map(item => 
                <SideBarList
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    data={item.data}
                >
                    <AddPortfolio />
                </SideBarList>
                )
            }
        </>
    )
}

export default SideBarMenu
