document.getElementById('valider').addEventListener('click',function(){
    var nombre1 = document.getElementById('premier_nombre').value;  //déclaration de la variable nombre1
    var nombre2 = document.getElementById('deuxieme_nombre').value; //déclaration de la variable nombre2
    if (isNaN(nombre1) == false && isNaN(nombre2) == false && nombre2 && nombre1){ //vérification que les données saisis sont bien des nombres
      if (parseInt(nombre2)==0) {       //vérification du nombre2 afin de prévenir que la division par 0 est interdit
        alert('division par 0 interdit')
      }
      else {
        var result  = parseInt(nombre1) % parseInt(nombre2);
        alert(result);
      }
    }
    else{
      alert('Veuillez vérifier votre saisis')
    }
})
