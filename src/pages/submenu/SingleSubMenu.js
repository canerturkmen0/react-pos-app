import React, { useState } from 'react';

const SingleSubMenu = ({ menu }) => {
    const [chosenSubMenu, setChosenSubMenu] = useState('');

    const handleChange = e => {
        setChosenSubMenu(e.target.value);
    }

    return (
        <div key={menu.key} className="submenus-item-container">
            <h3 className="submenus-item-title">{menu.description}</h3>
            {menu.items.map(item => (
                item.name && (
                    <div className="submenus-item" key={item.name}>
                        <div>
                            <div className="submenus-item-info">
                                <p>{item.name}</p>
                                <input
                                    type="radio"
                                    value={item.name}
                                    checked={chosenSubMenu === item.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>Ekstra fiyat: {item.price || 0} ₺</p>
                        </div>
                        <div className="submenus-item-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                    </div>
                )
            ))}
        </div>
    )
}

export default SingleSubMenu;