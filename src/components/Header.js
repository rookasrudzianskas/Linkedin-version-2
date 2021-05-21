import React from 'react';
import "./styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    );
};

export default Header;
