import React from "react";
import './style/CircleImg.css';
import './style/Modal.css'



function CircleImg(props) {

    const modal = document.querySelector('.modal');
    const close = document.querySelector('.button');
    close.addEventListener("click", function(e){
        modal.classList.remove('active');
    });

    const openImg = () => {
        console.log('click');
        modal.classList.add('active');
        modal.innerHTML = `<div class="modal_content"><img src=${props.path} alt="" /><button class="button">Okey</button></div>`;
        console.log(modal.innerHTML);

    }

    return (
        <div className={props.class_block} onClick={openImg}>
            <img className="img" src={props.path} alt="alt" />
        </div>
    );

}

export default CircleImg;