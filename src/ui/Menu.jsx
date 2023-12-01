import React from 'react';
import '../styles/Menu.css'

import StyledButton from "./StyledButton";
import styled from "styled-components";
const Menu = () => {
    const Text = styled.text`
      color: rgba(0, 0, 0, 0.70);
      font-size: 36px;
      font-family: Gilroy;
      font-weight: 600;
      word-wrap: break-word;
      text-align: center;
      width: 288px;
      flex-shrink: 0;
    `;
    return (
        <div className="Menu">
            <Text>Грузоперевозки Казахстан</Text>
            <StyledButton>Автопарк</StyledButton>
            <StyledButton>Автопарк</StyledButton>
            <StyledButton>Автопарк</StyledButton>
        </div>
    );
};

export default Menu;