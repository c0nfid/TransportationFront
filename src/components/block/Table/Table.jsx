import React, {useState} from 'react';
import classes from "./Table.module.css"
import EntityTable from "./EntityTable/EntityTable";
import HeaderTable from "./HeaderTable/HeaderTable";

const Table = ({data, isModalVisible, setIsModalVisible}) => {

    console.log(data)
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