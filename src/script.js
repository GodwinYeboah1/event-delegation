const addButton = document.querySelector('.create-boxes');
const grid = document.querySelector('.grid');
const boxs = document.querySelectorAll('.box');


addButton.addEventListener('click', function() {
    const box = document.createElement('div');
    box.classList.add("box");
    grid.append(box);
});

function addGlobalEventListner(type, selector, callback, parent = document) {
    parent.addEventListener(type, (e)=>  {
        if(e.target.matches(selector)) {
            callback(e);
        }
    });
}

addGlobalEventListner('click', '.box',(e)=> {
    e.target.classList.toggle('clicked');
}, grid);