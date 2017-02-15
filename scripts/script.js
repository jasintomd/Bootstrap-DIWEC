function reservado(){
    $("#valNom").html($("#resNombre").val()); 
    $("#valApe").html($("#resApellidos").val());
    $("#valEma").html($("#resEmail").val());
    $("#valPer").html($("#resPersonas").val());    
    $("#valHor").html($("#resHora").val());    
    $("#valDia").html($("#datepicker").val());    
    console.log($( "#datepicker" ).datepicker( "option", "dateFormat" ))
}
function numero(){
    $("#resPersonas").mousemove(function (){
        $("#resNum").html($("#resPersonas").val());
    })
}

$( document ).ready(function() {
    $( "#datepicker" ).datepicker( "option", "dateFormat", "dd/mm/yy" );
    $( "#datepicker" ).datepicker( "option", "monthNames", [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ] );
    $( "#datepicker" ).datepicker( "option", "dayNames", [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado" ] );
    $( "#datepicker" ).datepicker( "option", "dayNamesMin", [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ] );
     $("#resPersonas").mousedown(numero);
    $("#resBoton").click(reservado);  
$(document).on('click', 'a.cabOpcion', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$(function () {
    $('#carListaMenu a').click(function (e) {
		$('#carCartaMenu .active').removeClass('active');
		$('#carListaMenu .active').removeClass('active');
    });
});	
	
$(function () {
    $('#carCartaMenu a').click(function (e) {
		$('#carListaMenu .active').removeClass('active');
    });
});	
	
});