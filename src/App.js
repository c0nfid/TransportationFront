import React, {createContext, useEffect, useState} from "react";
import './styles/App.css';

import Header from "./components/block/Header/Header";
import $api from "./http/api";
import Table from "./components/block/Table/Table";
import ModalWindow from "./ui/ModalWindow/ModalWindow";
import EntityModifier from "./components/block/Table/EntityModifier/EntityModifier";
import Menu from "./components/block/Menu/Menu";

export const ApplicationContext = createContext(null)



function App() {
    const [data, setData] = useState([]);
    const [section, setSection] = useState("model")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [entity, setEntity] = useState(null)

    async function fetchData() {
        $api.get(`/${section}s`).then(response => setData(response.data))
    }


    useEffect(() => {
        fetchData().then()
    }, [section]);





    return (
        <div className="App">
            <ApplicationContext.Provider value={{entity, setEntity, section, setSection, fetchData}}>
                <ModalWindow isVisible={isModalVisible} setIsVisible={setIsModalVisible}><EntityModifier/></ModalWindow>
                <Menu/>
                <div className="Body">
                    <Header nameTable={section} date='17.11.2023'/>
                    <Table data={data} {...{isModalVisible, setIsModalVisible}} />
                    <button onClick={fetchData}>update</button>
                </div>
            </ApplicationContext.Provider>
        </div>
    );
}

export default App;
