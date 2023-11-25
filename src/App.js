import React, {useEffect, useState} from "react";
import './styles/App.css';
import Menu from "./components/ui/Menu";
import Header from "./components/ui/Header";
import TableComponent from "./components/ui/TableComponent";
import $api from "./http/api";
import axios from "axios";


function fetchData() {
    let Data;
    const response = fetch('http://127.0.0.1:8000/models/')
        .then(response => response.json()) // преобразовываем ответ в JSON
        .then(data => Data = data) // преобразовываем ответ в JSON
        .catch(error => console.error('Ошибка:', error)); // обрабатываем возможные ошибки
    return Data;
}

function App() {
    const [data, setData] = useState([]);

    async function fetchAutos(){
        const response = await axios.get('http://127.0.0.1:8000/models/')
        setData(response.data)
    }
  return (
    <div className="App">
        <Menu />
        <div className="Body">
            <Header nameTable='Автопарк' date='17.11.2023'/>
            <TableComponent data={data} />
            <button onClick={fetchAutos}>update</button>
        </div>
    </div>
  );
}

export default App;
