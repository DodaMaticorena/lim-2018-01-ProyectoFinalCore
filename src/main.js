// var timestamp   = snapshot.val().timestamp.toString().substring(0,10),
//   date        = new Date(timestamp * 1000),
//   datevalues  = [
//                    date.getFullYear(),
//                    date.getMonth()+1,
//                    date.getDate(),
//                    date.getHours(),
//                    date.getMinutes(),
//                    date.getSeconds(),
//                 ];

const name = document.getElementById("nombre");
const lastName = document.getElementById("apellido");
const identificacion = document.getElementById("dni");
const sexo = document.querySelectorAll(".sexo");
const nomTrabajador = document.getElementById("nomTrabajador");
const imagen = document.getElementById("photo");
const buttonRegistrar = document.getElementById("btn-submit");
const buttonBuscar = document.getElementById("btn-Buscar");
const card = document.querySelector(".card");

buttonRegistrar.addEventListener('click',()=>{
  const userId = firebase.auth().currentUser.uid;

  // const sexoT="";

  // if(identificacion.length === 8 || identificacion.length === 12){
  //   return true;
  // }else{
  //   alert("Ingresa tu dni o carnet de extranjeria correctamente")
  // }

  // for (let i = 0; i < sexo.length; i++) {
  //     if (sexo[i].checked === "hombre") {
  //        sexoT = sexo[i].value;
  //     }else{
  //       sexoT = sexo[i].value;
  //     }
  // };

  writeUserData(userId, name.value, lastName.value, identificacion.value.value,sexo[0].value,nomTrabajador.value);
  })
/* const validarInputs = function () {

};

var validarRadios = function () {
  var opciones = document.getElementsByName('sexo'),
    resultado = false;

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
      // Recorremos los radio button
      for (var o = 0; o < opciones.length; o++) {
        if (opciones[o].checked) {
          resultado = true;
          break;
        }
      }

      if (resultado == false) {
        elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
        console.log('El campo sexo esta incompleto');
        return false;
      } else {
        // Eliminamos la clase Error del radio button
        elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
        return true;
      }
    }
  }
};

var validarCheckbox = function () {
  var opciones = document.getElementsByName('terminos'),
    resultado = false;

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "checkbox") {
      for (var o = 0; o < opciones.length; o++) {
        if (opciones[o].checked) {
          resultado = true;
          break;
        }
      }

      if (resultado == false) {
        elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
        console.log('El campo checkbox esta incompleto');
        return false;
      } else {
        // Eliminamos la clase Error del checkbox
        elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
        return true;
      }
    }
  }
};

var enviar = function (e) {
  if (!validarInputs()) {
    console.log('Falto validar los Input');
    e.preventDefault();
  } else if (!validarRadios()) {
    console.log('Falto validar los Radio Button');
    e.preventDefault();
  } else if (!validarCheckbox()) {
    console.log('Falto validar Checkbox');
    e.preventDefault();
  } else {
    console.log('Envia');
    e.preventDefault();
  }
};

var focusInput = function () {
  this.parentElement.children[1].className = "label active";
  this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function () {
  if (this.value <= 0) {
    this.parentElement.children[1].className = "label";
    this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
  }
};

// --- Eventos ---
formulario.addEventListener("submit", enviar);

for (var i = 0; i < elementos.length; i++) {
  if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
    elementos[i].addEventListener("focus", focusInput);
    elementos[i].addEventListener("blur", blurInput);
  }
}
 */