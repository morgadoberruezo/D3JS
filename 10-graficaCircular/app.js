var datos = [];
console.log('circulos');
function cargarDatos(){
    d3.json ('datos.json', function(err, data){
        // array de objetos en vez de array de números
        datos = data; 
        console.log(datos);
        grafica();
    })
}

function grafica(){
    var width = 300;
    var height = 300;
    
    var radius = Math.min(width, height) / 2;
    
    var color = d3.scale.ordinal()
        .range(["Brown", "AntiqueWhite", "Aquamarine", "CadetBlue", "Crimson", "DarkGoldenRod", "DarkSeaGreen", "DarkOliveGreen", "GreenYellow"]);
    
    var arc = d3.svg.arc()
        .outerRadius(radius - 10) //radio por fuera
        .innerRadius(0);    //radio por dentro

    //Definimos un layout de tipo pie
    var pie = d3.layout.pie()
        .value(function(d){
            return d.dato;
        })
    
    var svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        //sirve para agrupar todos los espacios que va a formar el pie
        .append('g') 
        //movemos el centro de la tarta al centro de svg
        .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');
    
    /*
        Para poder armar el pie necesitamos tener un grupo de grupos
    */
    
    var g = svg.selectAll('.arc')
        .data(pie(datos))
        .enter()
        .append('g')
        .attr('class', 'arc')
    
    g.append('path')
        .attr('d', arc)
        .style('fill', function(d){
            return color(d.data.nombre)
    })
    
    g.append('text')
        .text(function(d){
            return d.data.nombre + ' (' + d.data.dato + ')';
    })
    .attr('transform', function(d){
        return 'translate(' + arc.centroid(d) + '), rotate('+ angle(d)+')'; 
    })
    
    
}

function angle(d){
    var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
    return a > 90 ? a - 180 : a;
}