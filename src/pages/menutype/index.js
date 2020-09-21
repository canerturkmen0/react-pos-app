import React from 'react';
import { useHistory } from "react-router-dom";

import useApp from '../../useApp';
import Header from '../../components/header';

const MenuType = () => {
    const { chosenMenuType, setOrder, data } = useApp();
    const history = useHistory();

    const handleClick = (item) => {
        const subMenu = item.subMenus;
        if (!subMenu) {
            setOrder(item);
            history.push("/success");
        }
        else {
            const newItem = { ...item };
            const newSubMenus = [];
            newItem.subMenus.forEach(subMenu => {
                data.forEach(singleData => {
                    if (singleData.key === subMenu) {
                        newSubMenus.push(singleData);
                    }
                })
            })
            newItem.subMenus = newSubMenus;
            setOrder(newItem);
            history.push("/submenu");
        }
    }

    return (
        <div className="main-container">
            <Header title={chosenMenuType && chosenMenuType.caption} />
            <div className="main">
                {chosenMenuType && chosenMenuType.items && chosenMenuType.items.map(item => (
                    <div key={item.name} className="main-item">
                        <div className="main-item-image" style={{ backgroundImage: `url("${item.image}")` }} onClick={() => handleClick(item)}>
                            <div className="main-item-caption">
                                <h3>{item.caption}</h3>
                                <p>{item.price} ₺</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuType;