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
        }
        pasados = pasados.sort(function(x,y){
            if(x.fecha < y.fecha){
                return 1;
            }
            return -1;
        });
        var html = '';
        for(var j = 0; j < pasados.length; j++){
            html += 
                    `
                    <div class="abs-center">
                        <div class="p-3 form">
                            <a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a>
                            <p>${pasados[j].fecha}</p>
                            <p>Descripción: ${pasados[j].descripcion}</p>
                        </div>
                    </div>
                    `
        }
        document.getElementById('pasados').innerHTML = html
    })
});