
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const identificacion = document.getElementById("identificacion");
const visitado = document.getElementById("visitado");
const tiempo = document.getElementById("time");
const buttonRegistrar = document.getElementById("btnRegistrar");
/* const buttonBuscar = document.getElementById("btn-Buscar");
const card = document.querySelector(".card"); */
const reload = () => {
  window.location.reload();
};
buttonRegistrar.addEventListener('click', (e) => {
  writeUserVisit(nombre.value, apellido.value, identificacion.value,visitado.value,tiempo.value);
  reload();
});

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