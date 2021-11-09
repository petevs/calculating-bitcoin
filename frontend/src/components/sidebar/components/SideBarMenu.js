import SideBarList from './SideBarList';
import GlobalContext from 'state/GlobalContext';
import { useContext } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const SideBarMenu = () => {

    const { state } = useContext(GlobalContext)

    const menu = [
        {
            title: 'Portfolios',
            icon: <LibraryBooksIcon />,
            data: state.portfolio.portfolioList().map(item => {
                return {
                    text: item.portfolioName, 
                    to: item.id
                    }
                })
        }
    ]
    

    return (
        <>
            {menu.map(item => 
                <SideBarList
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    data={item.data}
                />
                )
            }
        </>
    )
}

export default SideBarMenu
