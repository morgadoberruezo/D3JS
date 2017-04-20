
function seleccionarBloque(){
    
    d3.select('.bloque')
        .selectAll('div')
        .style("background-color", "blue")
        .style("color", "white")
        .style("border", "2px solid black")
        .style("padding", "5px")
        .style("margin", "5px")
             
}