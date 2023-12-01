import React, {useContext} from 'react';
import classes from "./Menu.module.css";
import {ApplicationContext} from "../../../App";
import StyledButton from "../../../ui/StyledButton/StyledButton";

const Menu = () => {
    const {setSection, section} = useContext(ApplicationContext)
    return (
        <div className={classes.Menu}>
            <div className={classes.HeaderText}>Грузоперевозки Казахстан</div>
            <StyledButton preset={'Bold'} onClick={e => {
                setSection('model')
            console.log(section)}}>Модели</StyledButton>
            <StyledButton preset={'Bold'} onClick={() => {setSection('auto')
                console.log(section)}}>Водители</StyledButton>
        </div>
    );
};

export default Menu;