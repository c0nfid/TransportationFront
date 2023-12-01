import React, {useState} from 'react';

const MyInput = ({field_name, row, setRow}) => {

    const [text, setText] = useState(row[field_name])

    return (
        <label>
            {field_name}
            <input value={text} onChange={e => setText(e.target.value)}/>
        </label>
    );
};

export default MyInput;