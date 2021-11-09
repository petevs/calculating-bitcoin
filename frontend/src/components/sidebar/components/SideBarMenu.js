import SideBarList from './SideBarList';
import { sideBarData } from '../sideBarData';

const SideBarMenu = () => {

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
