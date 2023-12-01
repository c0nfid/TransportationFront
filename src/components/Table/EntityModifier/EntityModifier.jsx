import React, {useContext, useEffect, useState} from 'react';
import {ApplicationContext} from "../../../App";
import MyInput from "./MyInput/MyInput";

const EntityModifier = () => {
    const {entity, setEntity} = useContext(ApplicationContext)
    const [row, setRow] = entity
    const keys = Object.keys(row)
    setRow(row => ({...row}))
    return <>
        {keys.map(field_name => <MyInput
            field_name={field_name}
            setRow={setRow}
            row={row}
            />)
            }
    </>
}




export default EntityModifier;