import React, { useEffect, useState } from 'react';

import menuJSON from './menu.json';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState([]);
    const [mainMenus, setMainMenus] = useState([]);
    const [chosenMenuType, setChosenMenuType] = useState({});
    const [order, setOrder] = useState({});

    useEffect(() => {
        if (menuJSON && menuJSON.menus) {
            setData(menuJSON.menus);
        }
    }, []);

    useEffect(() => {
        if (data) {
            const menus = data.find(menu => menu.key === 'main');
            setMainMenus(menus);
        }
    }, [data]);

    return (
        <AppContext.Provider
            value={{
                data, setData,
                mainMenus, setMainMenus,
                chosenMenuType, setChosenMenuType,
                order, setOrder,
            }}>
            {children}
        </AppContext.Provider>
    );
}