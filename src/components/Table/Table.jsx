import React, {useState} from 'react';
import classes from "./Table.module.css"
import EntityTable from "./EntityTable/EntityTable";
import HeaderTable from "./HeaderTable/HeaderTable";

const Table = ({data: original_data, isModalVisible, setIsModalVisible}) => {

    const data = original_data.map(a => ({...a}));

    return (
        <div className={classes.table}>
            <HeaderTable content={data[0]}/>
            {data.map((e, idx) => <EntityTable
                    key={idx}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    content={e}
                />
            )}
        </div>

    );
}

export default Table;