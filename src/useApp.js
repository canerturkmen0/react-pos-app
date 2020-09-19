import { useContext } from 'react';
import { AppContext } from './AppContext';

const useApp = () => {
    const { data, setData, mainMenus, setMainMenus, chosenMenuType, setChosenMenuType, order, setOrder } = useContext(AppContext);

    return {
        data, setData,
        mainMenus, setMainMenus,
        chosenMenuType, setChosenMenuType,
        order, setOrder,
    };
};
export default useApp;
