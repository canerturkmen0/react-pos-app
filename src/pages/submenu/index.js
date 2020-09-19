import React from 'react';

import useApp from '../../useApp';
import Header from '../../components/header';
import SingleSubMenu from './SingleSubMenu';

const SubMenu = () => {
    const { order } = useApp();

    return (
        <>
            <Header title={`${order.caption || ''} Ekstra İndirimli Alt Menüler`} />
            <div className="submenus-container">
                {order && order.subMenus && order.subMenus.map(menu => <SingleSubMenu key={menu.key} menu={menu} />)}
            </div>
        </>
    )
}

export default SubMenu;