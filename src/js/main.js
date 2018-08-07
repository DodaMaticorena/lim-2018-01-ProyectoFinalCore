

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const identificacion = document.querySelector("#identificacion");
const visitado = document.querySelector("#visitado");
const tiempo = document.querySelector("#time");
const buttonRegistrar = document.querySelector("#btnRegistrar");
const imageFile = document.querySelector("#photo");
const uploader = document.querySelector('#uploader');
const photoUser = document.querySelector('#imgSalida');
const motivo = document.querySelector("#motivo");

/* const buttonBuscar = document.getElementById("btn-Buscar");
const card = document.querySelector(".card"); */
const reload = () => {
  window.location.reload();
};

imageFile.addEventListener('change', function (e) {
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('post-images/' + file.name);
  var task = storageRef.put(file);
  task.on('state_changed',
    function (snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) { },
    function () {
      task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        fileName = file.name;
        fileUrl = downloadURL;
        photoUser.setAttribute('src', downloadURL);
        newUserVisit(fileName, fileUrl);
      });
    }
  )
})

const newUserVisit = (fileName, fileUrl) => {
  buttonRegistrar.addEventListener('click', () => {
    writeUserVisit(nombre.value, apellido.value, identificacion.value, fileName, fileUrl, visitado.value, tiempo.value, motivo.value);
    nombre.value = "";
    apellido.value = "";
    identificacion.value = "";
    photoUser.setAttribute("src","image/incognito.png");
    visitado.value = "";
    tiempo.value = "";
    motivo.value = "";

    // window.location.assign("message.html");
    sendEmail();
  });
}

const sendEmail = () => {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
      'message': {
        'from_email': 'nat@laboratoria.la',
        'to': [
          {
            'email': 'natalypc27@gmail.com ',
            'name': 'Nataly Porras',
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': 'html can be used'
      }
    }
  });

}
