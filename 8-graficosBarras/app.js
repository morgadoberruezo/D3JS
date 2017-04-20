var datos = [144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function grafica(){
    
    d3.select('.miGrafica')
        var w = 500;
        var h = 300;
    //creamos un svg de 500x300px
        var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h)
    
    //creamos cada barra con un rectángulo    
        svg.selectAll("rect")
            .data(datos)
            .enter() //reservamos el espacio
            .append("rect") //cada Rect es de 20x100 en (0,0)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 20)
            .attr("height", 100)
            .attr("x", function(data, idx){
                return idx * 22 + 30
            })
            .attr("height", function(data){
                return data
            })
            //invertimos la gráfica
            .attr("y", function(data){ 
                return h - data //altura - dato 
            })
        
    //creamos los textos y los posicionamos encima de cada barra    
        svg.selectAll('text')
            .data(datos)
            .enter()
            .append('text')
            .text(function (data){
                return data
            })
            .attr("x", function(data, i){
                return i * 22  + 40;
            })
        
            .attr("y", function(data, i){
                return h - data - 3;
            })
        
}
