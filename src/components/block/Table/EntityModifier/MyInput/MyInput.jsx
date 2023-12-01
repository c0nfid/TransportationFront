import React, {useState} from 'react';
import classes from "./MyInput.module.css";

const MyInput = ({field_name, newEntity}) => {

    const [text, setText] = useState(newEntity[field_name])

    return (
        <label className={classes.InputLabel}>
            {field_name}
            <input className={classes.InputStyle} value={text} onChange={e => {
                setText(e.target.value)
                newEntity[field_name] = e.target.value
            }}/>
        </label>
    );
};

export default MyInput;