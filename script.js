const container= document.querySelector("#container");
let inputBox= document.querySelector('.new-grid');
const input = document.querySelector('.input');
const inputBtn= document.getElementById('input-btn');
const clearBtn = document.querySelector('.clear-btn');
const randomBtn = document.querySelector('.random-btn');






//have to get container to keep size with larger divGrid funtion
//need multi-color function
//create array with pencil, multicolor, and hover color. e.target.
function divGrid(x){
    
    let size= (960/x);


        for (let i=0; i< x**2; i++) {

            const square= document.createElement("div");
            square.classList.add("square");
            square.style.width = `${size}px` ;
            square.style.height = `${size}px` ;
            container.appendChild(square);
            
            
        const hovAffect = document.querySelectorAll('.square');
        hovAffect.forEach(square=> square.addEventListener("mouseenter", hovColor) ) 

        randomBtn.addEventListener('click', ()=>{
            hovAffect.forEach(square => {
                square.removeEventListener('mousemove',hovColor);
                square.addEventListener('mouseenter', randomColor);
            })
        } )

        clearBtn.addEventListener('click', clear, false);
        function clear() {
            // const squareClear = document.querySelectorAll('.square');
               hovAffect.forEach(square => { if (square.style.backgroundColor!== true) square.style.backgroundColor = ""});
        }

    
    };

}

    

function hovColor(){
    if (event.target.style.backgroundColor === true){
        
    }
    event.target.style.backgroundColor= "grey";
    
}
function randomColor() {
    event.target.style.backgroundColor= '#'+Math.floor(Math.random()*16777215).toString(16);
}


function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }    
    
}

function newGrid() {
    clearGrid();
    inputBox.style.display = "block";
    divGrid(inputBox.value);
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            divGrid(input.value) 
            inputBox.style.display = "none"
            clearBtn.style.display = "inline-block";
        }
    })

}
