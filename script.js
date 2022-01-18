
function createSketchDivs(size){
    const sketch = document.querySelector('.sketch');
    for (let i=0; i<size; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let j=0; j<size; j++){
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            pixelDiv.id = `p${i}_${j}`;
            rowDiv.appendChild(pixelDiv)
        }
        sketch.appendChild(rowDiv);
    }
    const pixelDivs = document.querySelectorAll('div.pixel');
    pixelDivs.forEach(addMouseEnter);
}

function removeSketchDivs(){
    const sketch = document.querySelector('.sketch');
    const rowDivs = document.querySelectorAll('div.row');
    rowDivs.forEach(function (row) {
        sketch.removeChild(row);
    });
    createSketchDivs(16);
}

function addMouseEnter(item){
    item.addEventListener('mouseenter', e => {
        console.log(item.id);
        item.style['background-color'] = 'red';
    });
}

createSketchDivs(16);


const reset = document.querySelector('button#reset');
reset.addEventListener('click', e =>{
    removeSketchDivs();
    console.log("Reset Sketch");

});
