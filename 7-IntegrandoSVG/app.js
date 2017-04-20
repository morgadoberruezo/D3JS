var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function grafica(){
    // después realizaré adición de figuras a este svg
    var svg = d3.select('body')
        .append('svg');
   
    //añado tantos círulos como elementos tenga el array de datos
    var circulos = svg.selectAll('cicle')
        .data(datos)
        .enter().append('circle'); //reserva el espacio
    
    circulos.attr("cx", function(d, i){
            return (i*80) + 25;
        })
        .attr("cy", 300/2)
        .attr("r", function (d){
            return d    
        })
}