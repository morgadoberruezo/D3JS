
function seleccionar(){
    
    d3.selectAll('div')
        .style("background-color", "green")
}

function seleccionarBloque(){
    
    d3.select('.bloque')
        .style("border", "5px solid black")
        .selectAll('div')
        .style("background-color", "red")
        
}

