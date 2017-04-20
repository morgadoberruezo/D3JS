var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function generarGrafica(){
    
    d3.select('.miGrafica')
        //todas las divs que hayan, tantos como elementos del vector
        .selectAll('div') 
        //el método data() recibe como entrada el array datos
        //se repetirá su interior TANTAS VECES COMO ELEMENTOS 
        //tenga el array datos
        .data(datos)
        .enter() //reserva 12 ESPACIOS TEMPORALES
            .append('div') //que añada un div para cada elemento
            /*
             al text le añado una función anónima que tiene un parámetro
             de entrada (d) que se corresponde, en cada ITERACCIÓN, con el 
             valor del array que está procesando en ese momento
             */
            .text(function(d){
                if (d == 1)
                    return ('Precio ' + d + ' euro')
                else
                    return ('Precio ' + d + ' euros')
            })
        .style("background-color", "blue")
        .style("color", "white")
        .style("border", "2px solid black")
        .style("padding", "5px")
        .style("margin", "5px")
}
