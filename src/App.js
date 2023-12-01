import React, {createContext, useEffect, useState} from "react";
import './styles/App.css';
import Menu from "./ui/Menu";
import Header from "./ui/Header";
import TableComponent from "./ui/TableComponent";
import $api from "./http/api";
import axios from "axios";
import Table from "./components/Table/Table";
import ModalWindow from "./ui/ModalWindow/ModalWindow";
import EntityModifier from "./components/Table/EntityModifier/EntityModifier";

export const ApplicationContext = createContext(null)



function App() {
    const [data, setData] = useState([]);
    const [section, setSection] = useState("models")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [entity, setEntity] = useState(null)

    async function fetchData() {
        const response = await $api.get(`/${section}`)
        setData(response.data)
    }




    useEffect(() => {
        fetchData().then()
        console.log("fetchdata")
    }, []);





    return (
        <div className="App">
            <ApplicationContext.Provider value={{entity, setEntity, section, setSection, fetchData}}>
                <ModalWindow isVisible={isModalVisible} setIsVisible={setIsModalVisible}><EntityModifier/></ModalWindow>
                <Menu/>
                <div className="Body">
                    <Header nameTable='Автопарк' date='17.11.2023'/>
                    <Table data={data} {...{isModalVisible, setIsModalVisible}} />
                    <button onClick={fetchData}>update</button>
                </div>
            </ApplicationContext.Provider>
        </div>
    );
}

export default App;
