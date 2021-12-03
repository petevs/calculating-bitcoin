import SideBarList from './SideBarList';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddPortfolio from './AddPortfolio';
// import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// import SideBarListItem from './SideBarListItem';
// import { Link } from 'react-router-dom';


const SideBarMenu = () => {

    const portfolioMenu = [
        {
            title: 'Portfolios',
            icon: <LibraryBooksIcon />,
            // data: state.portfolio.portfolioList().map(item => {
            //     return {
            //         text: item.portfolioName, 
            //         to: `/portfolio/${item.id}`
            //         }
            //     })
            data: [
                {
                    text: 'My Portfolios',
                    to: '/portfolio'
                },
                {
                    text: 'Public Portfolios',
                    to: '/portfolios/public'
                },
            ]
        }
    ]
    
    const calculatorMenu = [
        {
            title: 'Calculators',
            icon: <CalculateIcon />,
            data: [
                {
                    text: 'All Calculators',
                    to: '/calculators'
                },
                {
                    text: 'Retire on Bitcoin',
                    to: '/calculators/retire-on-bitcoin'
                },
                {
                    text: 'Tax Liability',
                    to: '/calculators/tax-liability'
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
            {/* <SideBarListItem
                icon={<CollectionsBookmarkIcon />}
                text='My Bookmarks'
                button={{
                    component: Link,
                    to: '/bookmarks'
                }}
            /> */}
        </>
    )
}

export default SideBarMenu
