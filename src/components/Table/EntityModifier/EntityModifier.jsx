import React, {useContext, useEffect, useState} from 'react';
import {ApplicationContext} from "../../../App";
import MyInput from "./MyInput/MyInput";
import $api from "../../../http/api";
import {fetchAutos} from "../../../App";

const EntityModifier = () => {
    const {entity, setEntity, section, fetchData} = useContext(ApplicationContext)
    const [row, setRow, id] = entity
    const keys = Object.keys(row)

    const newEntity = {...row}

    const updateData = (id, newRow) => {
        $api.patch(`/${section}/${id}`, newRow).then(e => console.log(e.data))
        fetchData().then()
    }


    return <>
        {keys.map(field_name => <MyInput
            field_name={field_name}
            newEntity={newEntity}
            />)
            }
            <button onClick={() => {updateData(id, newEntity)}}>button</button>
    </>
}




export default EntityModifier;