$(document).on('ready',function()
{

	var text = "Bienvenidos ";
	var text2 = "a mi web";

	//Con estos script 2 es como creamos las 2 formas para mostrar y regresar el texto oculto

	$("#ocultar").click(function(event){
		 event.preventDefault();
		$("#oculto").hide("slow");
	 });

	$("#mostrar").click(function(event){
		event.preventDefault();
		$("#oculto").show(1000);
	});
});