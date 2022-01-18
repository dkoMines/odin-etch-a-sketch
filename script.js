
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
}

function addMouseEnter(item){
    item.addEventListener('mouseenter', e => {
        console.log(item.id);
        if (rainbowCheck.checked){
            let nextColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            rainbowCheck.style['background-color'] = nextColor;
            item.style['background-color'] = nextColor;
        } else {
            item.style['background-color'] = 'black';
        }
    });
}


const reset = document.querySelector('button#reset');
reset.addEventListener('click', e =>{
    removeSketchDivs();
    console.log("Reset Sketch");
    const pixSlider = document.querySelector('input#pixSlider');
    createSketchDivs(pixSlider.value);
});

const pixSlider = document.querySelector('input#pixSlider');
pixSlider.addEventListener('change', (e) => {
    const pixSize = document.querySelector('div#size');
    pixSize.textContent = pixSlider.value;
    removeSketchDivs()
    createSketchDivs(pixSlider.value);
});

createSketchDivs(pixSlider.value);

const rainbowCheck = document.querySelector('input#rainbow');
rainbowCheck.addEventListener('change', (e) => {
    if (rainbowCheck.checked){
        rainbowCheck.style['background-color'] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    } else {
        rainbowCheck.style['background-color'] = 'white';
    }
    console.log(rainbowCheck.checked);
});
