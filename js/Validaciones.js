/*window.onload = function(){

document.getElementById("fecha").oninput = ValidarFecha();
document.getElementById("edad").oninput = ValidarEdad();
document.getElementById("mail").oninput = ValidarMail();
document.getElementById("localidad").onchange = AgregarCaracteristica();
document.getElementById("tel").oninput = ValidarTel();
document.getElementById("foto").onchange = ValidarTamañoFoto();
}*/

function Validar(){

ValidarFecha()
ValidarEdad()
ValidarMail()
ValidarTel()
ValidarTamañoFoto()

}

//En explorer hay que poner aaaa/mm/dd, creo que es por la expresion regular
function ValidarFecha(){

var fechafield = document.getElementById("fecha");

var constfecha = new RegExp(/^\d{4}[./-]\d{2}[./-]\d{2}$/);

    if(fechafield.value){ 

        if(constfecha.test(fechafield.value)){
            
            fechafield.setCustomValidity('');
        }
        else{

            fechafield.setCustomValidity("El formato de fecha debe ser: dd/mm/aaaa");
        }
    }  
    else{
        fechafield.setCustomValidity("Debe completar el campo");
    }
}


function ValidarEdad(){

    var edadfield = document.getElementById("edad");

    var constedad = new RegExp(/^([0-9])*$/);


    if(constedad.test(parseInt(edadfield.value))){
        if(parseInt(edadfield.value)>=18){

            edadfield.setCustomValidity('');
        }
        else{
            edadfield.setCustomValidity("Debe ser mayor a 18 años");
        }
    }
    else{
        edadfield.setCustomValidity("Debe ingresar solo numeros");
    }
}


function ValidarMail(){

    var mailfield = document.getElementById("mail");
 
    var constmail = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,25}[A-Z]{2,6}$/i);
 
    if(mailfield.value){
        if(constmail.test(mailfield.value)){
            
            mailfield.setCustomValidity('');
        }
        else{
        
            mailfield.setCustomValidity("El formato debe ser: usuario@mail.com");
        }
    }
    else{
        mailfield.setCustomValidity("Debe completar el campo");
    }
}

function AgregarCaracteristica(){

    var ciudad = document.getElementById("localidad").value;
        
    document.getElementById("tel").value = ciudad;

}


function ValidarTel(){

    var telfield = document.getElementById("tel");
        
    var consttel = new RegExp(/^\d{2,4}\-\d{6,8}$|^$/);
        
    if(consttel.test(telfield.value)){
            
        telfield.setCustomValidity('');
    }
    else{

        telfield.setCustomValidity("El formato debe ser por ejemplo, 123-1234567 o vacio");
    }
}


function ValidarTamañoFoto(){

    var archfoto = document.getElementById("foto")

    if(archfoto.value){
        if(archfoto.files[0].size<2000){
            
            archfoto.setCustomValidity('');
        }
        else{
        
            archfoto.setCustomValidity("El tamaño debe ser menor a 2 KB");
        }
    }
    else{
        archfoto.setCustomValidity("Debe cargar una foto");

    }
}