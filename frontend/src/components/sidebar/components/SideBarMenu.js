import SideBarList from './SideBarList';
import GlobalContext from 'state/GlobalContext';
import { useContext } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddPortfolio from './AddPortfolio';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';


const SideBarMenu = () => {

    const { state } = useContext(GlobalContext)

    const portfolioMenu = [
        {
            title: 'Portfolios',
            icon: <LibraryBooksIcon />,
            data: state.portfolio.portfolioList().map(item => {
                return {
                    text: item.portfolioName, 
                    to: `/portfolio/${item.id}`
                    }
                })
        }
    ]
    
    const calculatorMenu = [
        {
            title: 'Calculators',
            icon: <CalculateIcon />,
            data: [
                {
                    text: 'Retire on Bitcoin',
                    to: '/calculators/'
                },
                {
                    text: 'Tax Liability',
                    to: '/calculators/'
                },
                {
                    text: 'Trade Preview',
                    to: '/calculators/'
                },
                {
                    text: 'Speculative Attack',
                    to: '/calculators/'
                },

            ]
        }
    ]

    const bookmarks = [
        {
            title: 'My Bookmarks',
            icon: <CollectionsBookmarkIcon />,
        }
    ]

    return (
        <>
            {portfolioMenu.map(item => 
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
            {calculatorMenu.map(item => 
                <SideBarList
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    data={item.data}
                >
                </SideBarList>
                )
            }
            {bookmarks.map(item => 
                <SideBarList
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    data={item.data}
                >
                </SideBarList>
                )
            }
        </>
    )
}

export default SideBarMenu
