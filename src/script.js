const addButton = document.querySelector('.create-boxes');
const grid = document.querySelector('.grid');
const boxs = document.querySelectorAll('.box');


addButton.addEventListener('click', function() {
    const box = document.createElement('div');
    box.setAttribute("class", "box");
    grid.appendChild(box);
});

function addGlobalEventListner(type, selector, callback, parent = document) {
    parent.addEventListener(type, function(e) {
        if(e.target.matches(selector)) {
            callback(e);
        }
    });
}

addGlobalEventListner('click', '.box',(e)=>{
    e.target.classList.toggle('clicked');
}, grid);