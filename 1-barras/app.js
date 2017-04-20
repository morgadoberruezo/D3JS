var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

var x = d3.scale.linear()
    .domain([0, d3.max(datos)])
//ancho visual de cada una de las columnas que estoy visualizando
    .range([0, 144]);           

function grafica(){
    
    d3.select("div.barras")
        .selectAll("div")
        .data(datos)
        .enter().append('div') //por cada dato agrega una división
        .style("width", function(elem){
            return x(elem) + "px"
        })
        .text(function(elem){
            return elem;
        })
}