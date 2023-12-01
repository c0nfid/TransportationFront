import React, {useContext, useState} from 'react';
import classes from "./EntityTable.module.css"
import edit from "../../../ui/icons/edit.svg";

import {ApplicationContext} from "../../../App";

function separateIdAndContentCells(row) {

    const keys = Object.keys(row)
    const idKey = findIdString(keys)
    const contentCells = {...row}
    delete contentCells[idKey]


    return [{"id": row[idKey]}, contentCells]
}

function findIdString(strings) {
    return strings.find(str => str.includes('_id') || str.includes('id_')) || null;
}


const EntityTable = ({content, isModalVisible, setIsModalVisible}) => {
    content = !!content ? content : {}
    const {entity, setEntity} = useContext(ApplicationContext)

    const [idCell, contentCells] = separateIdAndContentCells(content)
    const [row, setRow] = useState(contentCells)

    const cellWidth = 100 / Object.keys(content).length

    function callEditModalWindow() {
        setIsModalVisible(true)
        setEntity([row, setRow])
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

                {(Object.values(row)).map((e, idx) => <div key={idx} className={classes.cell}
                                                             style={{width: `${cellWidth}%`}}>
                    <p>{e}</p></div>)}
            </div>
        </>)

    );
}

export default EntityTable;