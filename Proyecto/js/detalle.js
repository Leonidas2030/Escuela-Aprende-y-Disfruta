var eventos;
$(document).ready(function(){
    $.ajax({
        url:"info.json"
    }).done(function(resultado){
        eventos = resultado.eventos;
        id = eventos.id;
        var id = location.search.match(/id=(\d)*/)[1];
        evento = eventos.find(function(element){
            return element.id == id
        })
        var html1 = 
                    `
                    <div class="abs-center" id="event">
                            <div class="p-3 form1" >
                                <h2>${evento.nombre}</h2>
                                <p>Fecha: ${evento.fecha}</p>
                                <p>Descripción: ${evento.descripcion}</p>
                                <p>Lugar : ${evento.lugar}</p>
                                <p>Precio: S/.${evento.precio}</>
                                <p>Aforo: ${evento.Aforo}</>
                            </div>
                    </div>
                    `
        document.getElementById('event').innerHTML = html1;
        console.log(id)
    });
});