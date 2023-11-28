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

    const addRow = () => {

    }
    async function fetchAutos(){
        const response = await axios.get('http://127.0.0.1:8000/models/')
        setData(response.data)

    }

    useEffect(() => {
        fetchAutos().then()
        console.log("fetchdata")
    }, []);


    const [isModalVisible, setIsModalVisible] = useState(false)
    const [entity, setEntity] = useState(11)
    const [entityData, setEntityData] = useState({})

    // useEffect(() => {
    //     const temp = data
    //     temp[entity] = entityData
    //     console.log(isModalVisible)
    //
    //
    // }, [isModalVisible]);
  return (
    <div className="App">
        <ApplicationContext.Provider value={{entity, setEntity}}>
        <ModalWindow isVisible={isModalVisible} setIsVisible={setIsModalVisible} ><EntityModifier {...{entityData, setEntityData}}/></ModalWindow>
        <Menu />
        <div className="Body">
            <Header nameTable='Автопарк' date='17.11.2023'/>
            <Table data={data} {...{isModalVisible, setIsModalVisible, setEntityData}} /> // setEntitydata
            <button onClick={fetchAutos}>update</button>
        </div>
        </ApplicationContext.Provider>
    </div>
  );
}

export default App;
