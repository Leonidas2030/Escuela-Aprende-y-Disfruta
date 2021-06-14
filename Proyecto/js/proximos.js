var proximos = [];
var hoy;
var eventos;

$(document).ready(function(){
    $.ajax({
        url:"info.json"
    }).done(function(resultado){
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        for(var i = 0; i < eventos.length; i++){
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
        var html1 = '';
        for(var k = 0; k < proximos.length; k++){
            id = proximos[k].id
            html1 += 
                    `
                    <div class="abs-center" id="event">
                            <div class="p-3 form1" >
                                <a href="detalle.html?id=${id}" id="enlace">${proximos[k].nombre}</a>
                                <p>${proximos[k].fecha}</p>
                                <p>Descripción: ${proximos[k].descripcion}</p>
                            </div>
                    </div>
                    `
        
        document.getElementById('proximos').innerHTML = html1;
        }
    })
});
