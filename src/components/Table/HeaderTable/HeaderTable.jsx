import React, {useContext, useState} from 'react';
import classes from "./Header.module.css"
import edit from "../../../ui/icons/edit.svg";

import {ApplicationContext} from "../../../App";
const HeaderTable = ({content}) => {
    content = content ? content : {}

    const titles = Object.keys(content)

    const cellWidth = 100 / titles.length

    const header = (cell) =>  <div className={classes.cell} style={{width: `${cellWidth}%`}}>{cell}</div>

    return (
    (<>
        <div className={classes.entityWrapper}>
            {titles.map(e => header(e))}
        </div>
    </>)

    );
}

export default HeaderTable;