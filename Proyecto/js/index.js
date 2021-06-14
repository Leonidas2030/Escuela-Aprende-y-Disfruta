var proximos = [];
var pasados = [];
var hoy;
var eventos;

$(document).ready(function(){
    $.ajax({
        url:"info.json"
    }).done(function(resultado){
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        for(var i = 0; i < eventos.length; i++){
            if(eventos[i].fecha < hoy){
                pasados.push(eventos[i]);
            }
            if(eventos[i].fecha > hoy){
                proximos.push(eventos[i]);
            }
        }
        proximos = proximos.sort(function(x,y){
            if(x.fecha < y.fecha){
                return -1;
            }
            return 1;
        });
        pasados = pasados.sort(function(x,y){
            if(x.fecha < y.fecha){
                return 1;
            }
            return -1;
        });

        var html = '';
        var html1 = '';
        for(var j = 0; j < pasados.length; j++){
            html = 
                    `
                    <div class="abs-center">
                        <div class="p-3 form">
                            <a href="detalle.html?id=${pasados[0].id}">${pasados[0].nombre}</a>
                            <p>${pasados[0].fecha}</p>
                            <p>Descripción: ${pasados[0].descripcion}</p>
                        </div>
                        <div class="p-3 form">
                            <a href="detalle.html?id=${pasados[1].id}">${pasados[1].nombre}</a>
                            <p>${pasados[1].fecha}</p>
                            <p>Descripción: ${pasados[1].descripcion}</p>
                        </div>
                    </div>
                    `
        }
        for(var k = 0; k < proximos.length; k++){
            html1 = 
                    `
                    <div class="abs-center">
                        <div class="p-3 form">
                            <a href="detalle.html?id=${proximos[0].id}" id="enlace">${proximos[0].nombre}</a>
                            <p>${proximos[0].fecha}</p>
                            <p>Descripción: ${proximos[0].descripcion}</p>
                        </div>
                        <div class="p-3 form">
                            <a href="detalle.html?id=${proximos[1].id}" id="enlace">${proximos[1].nombre}</a>
                            <p>${proximos[1].fecha}</p>
                            <p>Descripción: ${proximos[1].descripcion}</p>
                        </div>
                    </div>
                    `
        }
        document.getElementById('pasados').innerHTML = html
        document.getElementById('proximos').innerHTML = html1
    })
});
