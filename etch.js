
function initGrids(gridNum) {  
    window.currentGridNum = gridNum
    window.gridContainer = document.getElementById('grid-container')
    window.gradientMode = document.getElementById("gradient-mode")
    window.RGBMode = document.getElementById("RGB-mode")
    window.modeText = document.getElementById("mode-text")
    window.gridSize = (960/gridNum)
    window.maxGridSize = 64
    window.minGridSize = 16

    for (var rows = 0; rows < gridNum; rows++) {
        for (var columns = 0; columns < gridNum; columns++){
            const div = document.createElement('div');
            div.setAttribute('id','grid')
            div.setAttribute('style',`height: ${gridSize}px; width: ${gridSize}px;`)
            div.setAttribute('class',"zero-percent")
            gridContainer.appendChild(div);
        }
    }
    
    gridContainer.addEventListener("mouseover", black)
    RGBMode.innerHTML = "RGB Mode On"
    gradientMode.innerHTML = "Gradient Mode On"
    modeText.innerHTML = "Black Cursor"
}

function black(event){
    event.target.classList.remove("zero-percent")
    event.target.classList.remove("forty-percent")
    event.target.classList.remove("sixty-percent")
    event.target.classList.remove("eighty-percent")
    event.target.classList.remove("RGB")
    event.target.style.backgroundColor = ''
    event.target.classList.add("exclusive-black")
}

function newGrids(gridNum) {
    for (var rows = 0; rows < gridNum; rows++) {
        for (var columns = 0; columns < gridNum; columns++){
            const divRemove = document.getElementById('grid');
            divRemove.remove();
        }
    }

    var gridInput = 0
      
    while((gridInput < minGridSize) || (gridInput > maxGridSize) || (Number.isNaN(gridInput))) {
        var gridInput = parseInt(prompt('Input the number of grids you would like to create between 16 and 64'))
    }

    initGrids(gridInput)

    newGridSet = document.getElementById('newGrid')
    newGridSet.setAttribute("onclick", `newGrids(${gridInput});`)
    newGridSet = document.getElementById('clearGrid')
    newGridSet.setAttribute("onclick", `clearGrids(${gridInput});`)
}

function clearGrids(gridNum) {
    for (var rows = 0; rows < gridNum; rows++) {
        for (var columns = 0; columns < gridNum; columns++){
            const divRemove = document.getElementById('grid');
            divRemove.remove();
        }
    }

    for (var rows = 0; rows < gridNum; rows++) {
        for (var columns = 0; columns < gridNum; columns++){
            const div = document.createElement('div');
            div.setAttribute('id','grid')
            div.setAttribute('style',`height: ${gridSize}px; width: ${gridSize}px;`)
            div.setAttribute('class',"zero-percent")
            gridContainer.appendChild(div);
        }
    } 

    newGridSet = document.getElementById('clearGrid')
    newGridSet.setAttribute("onclick", `clearGrids(${gridNum});`)
}

function gradient(event){
    event.target.style.backgroundColor = ''
    if ((event.target.classList == "zero-percent") || event.target.classList == "RGB" || event.target.classList == "exclusive-black"){
        event.target.classList.remove("zero-percent")
        event.target.classList.remove("RGB")
        event.target.classList.remove("exclusive-black")
        event.target.classList.add("forty-percent")}

    else if (event.target.classList == "forty-percent"){
        event.target.classList.remove("forty-percent")
        event.target.classList.add("sixty-percent")}
    
    else if (event.target.classList == "sixty-percent"){
        event.target.classList.remove("sixty-percent")
        event.target.classList.add("eighty-percent")}

    else if (event.target.classList == "eighty-percent"){
        event.target.classList.remove("eighty-percent")
        event.target.classList.add("one-hundred-percent")}
    
    else if (event.target.classList == "one-hundred-percent"){
        event.target.classList.add("one-hundred-percent")}
}

function randomNum(){
    return Math.floor(Math.random() * Math.floor(255))
}

function RGB(event){
    event.target.classList.remove("zero-percent")
    event.target.classList.remove("forty-percent")
    event.target.classList.remove("sixty-percent")
    event.target.classList.remove("eighty-percent")
    event.target.classList.remove("one-hundred-percent")
    event.target.classList.remove("exclusive-black")
    event.target.classList.add("RGB")
    event.target.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`

}

function gradientModeToggle(){
    
    if (gradientMode.innerHTML == "Gradient Mode On"){
        gradientMode.innerHTML = "Gradient Mode Off"
        RGBMode.innerHTML = "RGB Mode On"
        modeText.innerHTML = "Gradient Cursor"
        gridContainer.removeEventListener("mouseover", black)
        gridContainer.removeEventListener("mouseover", RGB)
        gridContainer.addEventListener("mouseover", gradient)
    }
    else{
        gradientMode.innerHTML = "Gradient Mode On"
        RGBMode.innerHTML = "RGB Mode On"
        modeText.innerHTML = "Black Cursor"
        gridContainer.removeEventListener("mouseover", gradient)
        gridContainer.removeEventListener("mouseover", RGB)
        gridContainer.addEventListener("mouseover", black)
    }
}

function RGBModeToggle(){
  
    if (RGBMode.innerHTML == "RGB Mode On"){//RGB on
        RGBMode.innerHTML = "RGB Mode Off"
        gradientMode.innerHTML = "Gradient Mode On"
        modeText.innerHTML = "RGB Cursor"
        gridContainer.removeEventListener("mouseover", black)
        gridContainer.removeEventListener("mouseover", gradient)
        gridContainer.addEventListener("mouseover", RGB)
    }
    else{ //RGB off
        RGBMode.innerHTML = "RGB Mode On"
        gradientMode.innerHTML = "Gradient Mode On"
        modeText.innerHTML = "Black Cursor"
        gridContainer.removeEventListener("mouseover", gradient)
        gridContainer.removeEventListener("mouseover", RGB)
        gridContainer.addEventListener("mouseover", black)
    }
}


