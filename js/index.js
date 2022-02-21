function cargarContactos(){
    var contacto = {nombre: "Jesus", apellido: "Tejada", telefono: "829-652-1000"}
    fetch("http://www.raydelto.org/agenda.php",
    {
        method: "POST",
        body: JSON.stringify(contacto)
    }
    ).then(function(contacto){
        return contacto.json();
    }).then(function(contacto){
        var cuerpo = document.getElementById("cuerpo");
        var primer = contacto[25];
        cuerpo.innerHTML = primer.nombre + " " + primer.apellido + " " + primer.telefono;
    })
}