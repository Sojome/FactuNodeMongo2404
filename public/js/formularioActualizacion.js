 $( function() {
	  
    var principalTags = [
	 { value: "AC",    label: "Avenida Calle",},
	 { value: "AD",    label: "Administracion",},
	 { value: "ADL",   label: "Adelante",},
	 { value: "AER",   label: "Aeropuerto",},
	 { value: "AG",    label: "Agencia",},
	 { value: "AGP",   label: "Agrupacion",},
	 { value: "AK",    label: "Avenida carrera",},
	 { value: "AL",    label: "Altillo",},
	 { value: "ALD",   label: "Al lado",},	
	 { value: "ALM",   label: "Almacen",},
     { value: "AP",    label: "Apartamento",},	
     { value: "APTDO", label: "Apartado",},	
	 { value: "ATR",   label: "Atrás",},
	 { value: "AUT",   label: "Autopista",},
	 { value: "AV",    label: "Avenida",},	
	 { value: "AVIAL", label: "Anillo Vial",},
	 { value: "BG",    label: "Bodega",},
	 { value: "BL",    label: "Bloque",},
	 { value: "BLV",   label: "Boulevard",},
	 { value: "BRR",   label: "Barrio",},
	 { value: "C",     label: "Corregimiento",},
	 { value: "CA",    label: "Casa",},
	 { value: "CAS",   label: "Caserío",},
	 { value: "CC",    label: "Centro comercial",},
	 { value: "CD",    label: "Ciudadela",},
	 { value: "CEL",   label: "Célula",},
	 { value: "CEN",   label: "Centro",},
	 { value: "CIR",   label: "Circular",},
	 { value: "CL",    label: "Calle",},
	 { value: "CLJ",   label: "Callejón",},
	 { value: "CN",    label: "Camino",},
	 { value: "CON",   label: "Conjunto residencial",},
	 { value: "CONJ",  label: "Conjunto",}
	 
	 
    ];
	
	var principalLetraTags = [ 
	 { value: "A",     label:"A",},
	 { value: "A Bis", label:"A Bis",},
	 { value: "B",     label:"B",},
	 { value: "B Bis", label:"B Bis",},
     { value: "C",     label:"C",},
	 { value: "C Bis", label:"C Bis",},	 
	 { value: "D",     label:"D",},
	 { value: "D Bis", label:"D Bis",},	 
	 { value: "E",     label:"E",},
	 { value: "E Bis", label:"E Bis",},	 
	 { value: "F",     label:"F",},
	 { value: "F Bis", label:"F Bis",},	 
	 { value: "G",     label:"G",},
	 { value: "G Bis", label:"G Bis",}	 
	 
	 ];
	 
	 var orientacionTags = [ 
	 { value: "NORTE", label:"Norte",},
	 { value: "SUR", label:"Sur",},
	 { value: "ESTE", label:"Este",},
	 { value: "OESTE", label:"Oeste",},
	 { value: "NORTE", label:"",}
	 ];
	 
	  
	$( "#VIA_P_NOMB" ).autocomplete({
		minLength:0,
        source: principalTags,
		focus: function(event,ui){
			$("#VIA_P_NOMB").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_P_NOMB").val(ui.item.label);
			$("#VIA_P_NOMB_id").val(ui.item.value);
			return false;
		}	
    });
	$( "#VIA_P_LETRA" ).autocomplete({
		minLength:0,
        source: principalLetraTags,
		focus: function(event,ui){
			$("#VIA_P_LETRA").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_P_LETRA").val(ui.item.label);
			$("#VIA_P_LETRA_id").val(ui.item.value);
			return false;
		}	
    });
	$( "#VIA_P_SEC" ).autocomplete({
		minLength:0,
        source: orientacionTags,
		focus: function(event,ui){
			$("#VIA_P_SEC").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_P_SEC").val(ui.item.label);
			$("#VIA_P_SEC_id").val(ui.item.value);
			return false;
		}	
    });
	
	$( "#VIA_S_LETRA" ).autocomplete({
		minLength:0,
        source: principalLetraTags,
		focus: function(event,ui){
			$("#VIA_S_LETRA").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_S_LETRA").val(ui.item.label);
			$("#VIA_S_LETRA_id").val(ui.item.value);
			return false;
		}	
    });
	
	$( "#VIA_S_SEC" ).autocomplete({
		minLength:0,
        source: orientacionTags,
		focus: function(event,ui){
			$("#VIA_S_SEC").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_S_SEC").val(ui.item.label);
			$("#VIA_S_SEC_id").val(ui.item.value);
			return false;
		}	
    });
	
	$( "#VIA_C_LETRA" ).autocomplete({
		minLength:0,
        source: principalLetraTags,
		focus: function(event,ui){
			$("#VIA_C_LETRA").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_C_LETRA").val(ui.item.label);
			$("#VIA_C_LETRA_id").val(ui.item.value);
			return false;
		}	
    });
	
	$( "#VIA_C_SEC" ).autocomplete({
		minLength:0,
        source: orientacionTags,
		focus: function(event,ui){
			$("#VIA_C_SEC").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#VIA_C_SEC").val(ui.item.label);
			$("#VIA_C_SEC_id").val(ui.item.value);
			return false;
		}	
    });
	
	
	
	$( "#DETALLE_1_NOMB" ).autocomplete({
		minLength:0,
        source: principalTags,
		focus: function(event,ui){
			$("#DETALLE_1_NOMB").val(ui.item.label)
			return  false;
		},
		select:function(event,ui){
			$("#DETALLE_1_NOMB").val(ui.item.label);
			$("#DETALLE_1_NOMB_ID").val(ui.item.value);
			return false;
		}	
    });
	
	
  } 
  );

  
  
  