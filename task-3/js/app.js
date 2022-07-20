let response;
let id = 0;
let country, name_university, web_page, domains;


const main_table = document.querySelector('.tables');
const button_send = document.querySelector('.send');
const button_reset = document.querySelector('.reset');

button_send.addEventListener('click', function (e) {
    const input = document.querySelector('.input_area').value;
    fetch('http://universities.hipolabs.com/search?name=middle')
        .then(r => r.json())
        .then(j => {
            this.response = j;
            for (let i = 0; i < 10; i++) {
                console.log(this.response[i].country);
                if (input == this.response[i].country) {

                    id += 1;
                    this.country = this.response[i].country;
                    this.name_university = this.response[i].name;
                    this.web_page = this.response[i].web_pages[0];
                    this.domains = this.response[i].domains[0];

                    const tables = document.querySelector('.table_remove');
                    const newTable = document.createElement('div');
                    newTable.innerHTML = 
                    `<div class="table">
                        <div class="id">${id}</div>
                        <div class="country">${this.country}</div>
                        <div class="name_university">${this.name_university}</div>
                        <div class="web_page">
                            <a href="${this.web_page} target="_blank">${this.web_page}</a>
                        </div>
                        <div class="domains">${this.domains}</div>
                    </div>`

                    tables.append(newTable);
                }
            }
        });
});

button_reset.addEventListener('click', function(e){
    const tables = document.querySelector('.table_remove');
    tables.remove();
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div class="table_remove"></div>`;
    main_table.append(newElement);
    id=0;
});