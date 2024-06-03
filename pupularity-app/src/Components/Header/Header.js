import { EmojiEvents, Person, Pets, } from "@material-ui/icons";
import "./Header.css";
import React from "react";
import { IconButton } from "@material-ui/core";


function Header(){
    return (
        <div className="header">
            <IconButton>
                <Person className="header__icon" fontSize="large"/>
            </IconButton>
            <Pets color="secondary" />
            {/* <img className="header__logo" src="https://seeklogo.com/images/B/black-dog-circle-logo-7032FEC424-seeklogo.com.png" alt="dog Logo"/> */}
            <IconButton>    
                <EmojiEvents className="header__icon header__trophy" fontSize="large"/>
            </IconButton>
        </div>
    );
}

export default Header;