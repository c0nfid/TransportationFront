import React, {useContext, useEffect, useState} from 'react';
import {ApplicationContext} from "../../../../App";
import MyInput from "./MyInput/MyInput";
import $api from "../../../../http/api";
import {fetchAutos} from "../../../../App";
import classes from "./EntityModifier.module.css";
import StyledButton from "../../../../ui/StyledButton/StyledButton";

const EntityModifier = () => {
    const {entity, setEntity, section, fetchData} = useContext(ApplicationContext)
    const [contentCells, id, setIsModalVisible] = entity
    const keys = Object.keys(contentCells)

    const newEntity = {...contentCells}

    const updateData = (id, newRow) => {
        $api.patch(`/${section}s/${id}`, newRow).then(e =>
            fetchData().then()
        )
        setIsModalVisible(false)

    }


    return <div className={classes.EntityStyle}>
        <span>Изменение таблицы {section} </span>
        <div>
        {keys.map(field_name => <MyInput
            field_name={field_name}
            newEntity={newEntity}
        />)
        }</div>
        <div className={classes.buttonLine}>
        <StyledButton onClick={() => {
            updateData(id, newEntity)
        }} preset={'Input'}>Изменить</StyledButton>
        <StyledButton onClick={() => {
            setIsModalVisible(false)
        }} preset={'Input'}>Cancel</StyledButton>
        </div>
    </div>
}


export default EntityModifier;