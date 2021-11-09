import SideBarList from './SideBarList';
import { sideBarData } from '../sideBarData';
import GlobalContext from 'state/GlobalContext';
import { useContext } from 'react'

const SideBarMenu = () => {

    const { state } = useContext(GlobalContext)

    console.log(state.portfolio.portfolioList())

    return (
        <>
            {sideBarData.map(item => 
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
