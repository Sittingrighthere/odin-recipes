let grid = document.getElementById("grid");


function createSquares() {   
    let ask = prompt();
    if (isNaN(ask)) {
        alert("retry");
    }
    else {
        grid.innerHTML="";
        for (let index = 0; index < ask*ask; index++) {
            let square = document.createElement("div");
            square.id= "square";
            grid.appendChild(square); 
            square.style.width= (100/ask) + "vw"; 
            square.style.height= (100/ask) + "vw";
        };
        
    };
    return
} ;

document.getElementById("grid").addEventListener("mouseover",function(e) {
    if (e.target && e.target.id=="square") {
       e.target.style.backgroundColor = "black";
    }
});
