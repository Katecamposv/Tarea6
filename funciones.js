function ParoImpar(){
   var dig= parseFloat(document.getElementById("digitoCF1").value);
    if(dig%2==0){
       alert("Es par")
    }else{
        alert("Es impar")
    }
}
function numMes(){
    var dig= parseFloat(document.getElementById("digitoCF2").value);
    let mes;
    switch(dig){
        case 1: 
        mes = "Enero"
        break;
        case 2: 
        mes = "Febrero"
        break;
        case 3: 
        mes = "Marzo"
        break;
        case 4: 
        mes = "Abril"
        break;
        case 5: 
        mes = "Mayo"
        break;
        case 6: 
        mes = "Junio"
        break;
        case 7: 
        mes = "Julio"
        break;
        case 8: 
        mes = "Agosto"
        break;
        case 9: 
        mes = "Setiembre"
        break;
        case 10: 
        mes = "Octubre"
        break;
        case 11: 
        mes = "Noviembre"
        break;
        case 12: 
        mes = "Diciembre"
        break;

    }
    alert("El mes "+dig+" es "+ mes);
}
function ValidarVacio() {
    try {
        var dig = parseFloat(document.getElementById("digitoCE1").value);
        var dig2 = parseFloat(document.getElementById("digitoCE2").value);
       
        if (isNaN(dig) || isNaN(dig2) || dig == "" || dig2 == "") {
            throw new Error("Por favor, ingresa valores válidos en ambos campos.");
        }

        var resul = dig + dig2;
        alert(dig + " + " + dig2 + " = " + resul);
    } catch (error) {
        alert("Error: " + error.message);
    }
}
function Contador(){
    var palabra = document.getElementById("palabra").value;
    var cantidad=0;
    for(var i=0; i<=palabra.length; i++ ){

        cantidad= i;

    }
    alert("La palabra "+palabra +" tiene "+cantidad+ " de numeros");
}
function Adivina(){
    var numeroSecreto = Math.floor(Math.random() * 10) + 1;
  
  
    var fallos= 0;
   
    while(fallos<3){
        var dig1 = parseFloat(document.getElementById("numeroB1").value);
        var dig2 = parseFloat(document.getElementById("numeroB2").value);
        var dig3 = parseFloat(document.getElementById("numeroB3").value);

        if(dig1==numeroSecreto||dig2==numeroSecreto||dig3==numeroSecreto){
          
           
          if(dig1==numeroSecreto){
                document.getElementById("numeroB1").style.background= "green";
                document.getElementById("numeroB2").style.background= "red";
                document.getElementById("numeroB3").style.background= "red";
          
            }
            if(dig2==numeroSecreto){
                document.getElementById("numeroB1").style.background= "red";
                document.getElementById("numeroB2").style.background= "green";
                document.getElementById("numeroB3").style.background= "red";
          
            }
            if(dig3==numeroSecreto){
                document.getElementById("numeroB1").style.background= "red";
                document.getElementById("numeroB2").style.background= "red";
                document.getElementById("numeroB3").style.background= "green";
                
            }
            alert("¡Acertó! El número es " + numeroSecreto);
            break;
         
        } else{
            
                document.getElementById("numeroB1").style.background= "red";
                document.getElementById("numeroB2").style.background= "red";
                document.getElementById("numeroB3").style.background= "red";
                alert("Lo siento, ha agotado todos los intentos. El número era " + numeroSecreto);
                break;
          
            }
             
            }
          }
        
        function reiniciar() {
            document.getElementById("numeroB1").value = "";
            document.getElementById("numeroB2").value = "";
            document.getElementById("numeroB3").value = "";
            document.getElementById("numeroB1").style.background= "white";
                document.getElementById("numeroB2").style.background= "white";
                document.getElementById("numeroB3").style.background= "white";
          
           
          }

          function Annios() {
            var fecha = new Date(document.getElementById("fechaN").value);
            var fechaActual = new Date();
            var resta = 1;
            var cont = 0;
          
            do {
              fecha.setFullYear(fecha.getFullYear() + 1);
              resta = fechaActual.getFullYear() - fecha.getFullYear();
              
              resta-=1;
              cont++;
            } while (resta >= 0);
            
            alert("Usted este año cumple/cumplió " + cont + " años");
          }