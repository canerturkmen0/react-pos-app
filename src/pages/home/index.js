import React from 'react';
import { useHistory } from "react-router-dom";

import useApp from '../../useApp';
import Header from '../../components/header';

const Home = () => {
    const { mainMenus, setChosenMenuType } = useApp();

    const history = useHistory();

    const handleClick = item => {
        setChosenMenuType(item);
        history.push("/menutype");
    }

    return (
        <div className="main-container">
            <Header title={mainMenus?.description} />
            <div className="main">
                {mainMenus?.items?.map(item => (
                    <div key={item.name} className="main-item">
                        <div className="main-item-image" style={{ backgroundImage: `url("${item.image}")` }} onClick={() => handleClick(item)}>
                            <h3 className="main-item-caption">{item.caption}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;