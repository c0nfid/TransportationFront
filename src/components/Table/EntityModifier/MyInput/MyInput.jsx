import React, {useState} from 'react';

const MyInput = ({field_name, newEntity}) => {

    const [text, setText] = useState(newEntity[field_name])

    return (
        <label>
            {field_name}
            <input value={text} onChange={e => {
                setText(e.target.value)
                newEntity[field_name] = e.target.value
            }}/>
        </label>
    );
};

export default MyInput;