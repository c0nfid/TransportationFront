import React, {useContext, useState} from 'react';
import classes from "./EntityTable.module.css"
import edit from "../../../../ui/icons/edit.svg";

import {ApplicationContext} from "../../../../App";

function separateIdAndContentCells(row, section) {

    const keys = Object.keys(row)
    const idKey = findIdString(keys, section)
    const contentCells = {...row}
    delete contentCells[idKey]


    return [{"id": row[idKey]}, contentCells]
}

function findIdString(strings, section) {
    return strings.find(str => str.includes('_id') || str.includes(`id_${section}`)) || null;
}


const EntityTable = ({content, isModalVisible, setIsModalVisible}) => {
    content = !!content ? content : {}
    const {entity, setEntity, section} = useContext(ApplicationContext)
    const [idCell, contentCells] = separateIdAndContentCells(content, section)


    const cellWidth = 100 / Object.keys(content).length

    function callEditModalWindow() {
        setIsModalVisible(true)
        setEntity([contentCells, idCell.id, setIsModalVisible])
    }


    const editWithId = (
        <div className={classes.cell} style={{width: `${cellWidth}%`, justifyContent: "space-between"}}>
            <div onClick={callEditModalWindow}>
                <img src={edit} className={classes.edit}></img>
            </div>
            <span>{idCell.id}</span>
            <div></div>
        </div>
    )

    return (
        (<>
            <div className={classes.entityWrapper}>
                {editWithId}

                {(Object.values(contentCells)).map((e, idx) => <div key={idx} className={classes.cell}
                                                             style={{width: `${cellWidth}%`}}>
                    <p>{String(e)}</p></div>)}
            </div>
        </>)

    );
}

export default EntityTable;