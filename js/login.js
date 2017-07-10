function inicio_sesion(){
  	$users=['user@espol.edu.ec','laborat'];
  	$pass=['12345','54321'];
  	$var1 = $("#inputEmail3").val();
  	/*
  	$var2 = $("#inputPassword").val();
  	if($var1!=""){
  		for (var i = 0 ; i <= length(users); i++) {
  			if ($var1==$users[i]){
  				if ($var2==$pass[i]){
  					console.log("Done");
  				} else {
  					console.log("Incorrect Password.");
  				}
  			} else{
  				console.log("User doesn't exist!");
  			}
  		}
  	}
  	*/
    if($var1!=""){
    	if ($var1=="user@espol.edu.ec") {
    		$(".panel-body .form-horizontal").attr("action","https://elisanvil.github.io/ProyectoStella/index.html");
    	}	/*
      if ($var1=="laborat") {
  		  $(".login2 .form-signin").attr("action","laboratorista.html");
    	} 
      if ($var1=="oper") {
        $(".login2 .form-signin").attr("action","operario.html");
      }*/
      if( $var1!="user" && $var1!="laborat" && $var1!="oper"){
        setTimeout(function() 
          {
            ErrorLogin();
          }, 5000);
      }
    }
    else{
      ErrorLogin();
    }
  	
}

function ErrorLogin() {
        BootstrapDialog.show({
          type: BootstrapDialog.TYPE_DANGER,
          message: 'Usuario incorrecto!',
          title: 'Error'
        });
}