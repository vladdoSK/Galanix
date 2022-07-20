import React from "react";
import './style/Header.css';
import ReactDOM from 'react-dom/client';

const header_time = ReactDOM.createRoot(document.getElementById('header_time'));

function Header(props) {

    let data_time;

    var element_num = document.querySelector('.App'),
        numElems = element_num.getElementsByTagName('*').length / 2;

    const getToday = () => {
        const date = new Date();
        if (date.getMonth() < 10) {
            //console.log(`${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}.${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
            data_time = `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}.${date.getHours()}:${date.getMinutes()}`;
        }
        else {
            //console.log(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
            data_time = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.${date.getHours()}:${date.getMinutes()}`;
        }
    }

    getToday();

    const element = (
        <div className="data_time">
            <h2>Кількість елементів: {numElems}</h2>
            <h2>Поточний час: {data_time}</h2>
        </div>
    );
    header_time.render(element);
}

setInterval(Header, 1000);

export default Header;