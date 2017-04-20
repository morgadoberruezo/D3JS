var datos = [1, 2, 3, 5,28, 13, 21, 34, 55, 89, 144];

function generarGrafica(){
    
    d3.select('.miGrafica')
        .selectAll('div') 
        .data(datos) //inyecta los 12 divs
        .enter().append('div') 
        .attr('class', 'barra')
        .text(function(data){
            return data;
        })
        .style("height", function(data){
            return data + 'px';
        })
           
}
