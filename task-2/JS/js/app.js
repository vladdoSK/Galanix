var element_num = document.querySelector('.app'),
    numElems = element_num.getElementsByTagName('*').length / 2;

const element_number = document.querySelector('.element_number');
const clock = document.querySelector('.clock');
console.log(clock);

element_number.innerHTML = `Кількість елементів: ${numElems}`;


function time(){
    let date = new Date();
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    let year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    clock.innerHTML = `Поточна дата: ${day}.${month}.${year}.${hour}:${minute}`;
}

setInterval(time, 1000);


//---------------------------------------------------------

const open = document.querySelector('.app');
console.log(open);
const modal = document.querySelector('.modal');
const close = document.querySelector('.button');
const modal_content = document.querySelector('.modal_content');
const header = document.querySelector('.header_time');

open.addEventListener("click", function (event) {
    if (event.target.closest('.circle_1')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/1.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_2')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/2.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_3')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/3.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_4')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/4.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_5')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/5.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_6')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/6.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_7')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/7.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_8')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/8.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_9')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/9.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_10')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/10.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_11')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/11.jpg" alt="photo" />`;
        modal.classList.add('active');

    }
    if (event.target.closest('.circle_12')) {
        modal_content.innerHTML =
            `<img class="img_all_size" src="./image/12.jpg" alt="photo" />`;
        modal.classList.add('active');

    }

});

close.addEventListener("click", function () {
    modal.classList.remove('active');
});

//---------------------------------------------------------









