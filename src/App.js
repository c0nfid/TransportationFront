import React, {useEffect, useState} from "react";
import './styles/App.css';
import Menu from "./ui/Menu";
import Header from "./ui/Header";
import TableComponent from "./ui/TableComponent";
import $api from "./http/api";
import axios from "axios";
import Table from "./components/Table/Table";


function App() {
    const [data, setData] = useState([]);

    async function fetchAutos(){
        const response = await axios.get('http://127.0.0.1:8000/models/')
        setData(response.data)
    }

    useEffect(() => {
        fetchAutos().then()
        console.log("fetchdata")
    }, []);


  return (
    <div className="App">
        <Menu />
        <div className="Body">
            <Header nameTable='Автопарк' date='17.11.2023'/>
            <Table data={data} />
            <button onClick={fetchAutos}>update</button>
        </div>
    </div>
  );
}

export default App;
