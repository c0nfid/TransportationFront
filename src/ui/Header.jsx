import React from 'react';
import StyledButton from "./StyledButton";
import styled from "styled-components";
import '../styles/Header.css';
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

    async function postAutos(){
        const data = {
            "name": "Belarus",
            "vendor_country": "Belorussia"
        }
        const response = await axios.post('http://127.0.0.1:8000/models/', data)
    }

    return (
        <div className="Header">
            <div className="Description">
                <Text>Таблица {props.nameTable}</Text>
                <Text>Дата: {props.date}</Text>
            </div>
            <div className="ButtonList">
                <StyledButton>Добавить запись</StyledButton>
                <StyledButton>Изменить запись</StyledButton>
                <StyledButton>Удалить запись</StyledButton>
            </div>

        </div>
    );
};

export default Header;