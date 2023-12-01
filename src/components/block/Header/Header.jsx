import React from 'react';
import StyledButton from "../../../ui/StyledButton/StyledButton";
import styled from "styled-components";
import classes from "./Header.module.css"
import axios from "axios";

const Header = (props) => {
    const Text = styled.text`
      font-family: Gilroy;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: block;
    `;

    return (
        <div className={classes.Header}>
            <div className={classes.Description}>
                <Text>Таблица {props.nameTable}</Text>
                <Text>Дата: {props.date}</Text>
            </div>
            <div className={classes.ButtonList}>
                <StyledButton>Добавить запись</StyledButton>
                <StyledButton>Изменить запись</StyledButton>
                <StyledButton>Удалить запись</StyledButton>
            </div>

        </div>
    );
};

export default Header;