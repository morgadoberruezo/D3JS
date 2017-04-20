var datos = [];

function cargarDatos(){
    d3.json ('datos.json', function(err, data){
        // array de objetos en vez de array de números
        datos = data; 
        console.log(datos);
        grafica();
    })
}

function grafica(){
    var w = 500;
    var h = 300;
    
    var svg = d3.select('body')
        .append('svg')
        .attr('w', w)
        .attr('h', h)
    
    svg.selectAll('rect')
        .data(datos)
        .enter()
        .append('rect')
        .attr('width', 21)
        .attr('height', 100)
        .attr('x', function(d, i){
            return i * 22 + 30
        })
        .attr('y', function(d){
            return h - d.dato
        })
        .attr('height', function(d){
            return d.dato
        })
    
    svg.selectAll('text')
        .data(datos)
        .enter()
        .append('text')
        .text(function(d){
            return d.dato
        })
        .attr('x', function(d, i){
            return i * 22 + 30;
        })
        .attr('y', function(d, i){
            return h -d.dato - 5
        })
}