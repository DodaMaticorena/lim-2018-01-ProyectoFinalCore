

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const identificacion = document.querySelector("#identificacion");
const visitado = document.querySelector("#visitado");
const tiempo = document.querySelector("#time");
const buttonRegistrar = document.querySelector("#btnRegistrar");
const imageFile= document.querySelector("#photo");
imageFile.value = '';
const uploader = document.querySelector('#uploader');
const photoUser=document.querySelector('#imgSalida');

/* const buttonBuscar = document.getElementById("btn-Buscar");
const card = document.querySelector(".card"); */
const reload = () => {
  window.location.reload();
};

  imageFile.addEventListener('change', function (e) {
    console.log(e.target.files)
    // alert('Wait a minute please')
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('post-images/' + file.name);
    // var databaseRef = firebase.storage().ref('post-images/');
    var task = storageRef.put(file);
    task.on('state_changed',
      function (snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },
      function error(err) {},
      function () {
        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          fileName = file.name;
          fileUrl = downloadURL;
          photoUser.setAttribute('src',downloadURL);
          newUserVisit(fileName, fileUrl);
          console.log('File available at', downloadURL);
          alert('Now you can publish')
        });
      }
    )
  })

const newUserVisit = (fileName,fileUrl) =>{
  buttonRegistrar.addEventListener('click', () => {
    writeUserVisit(nombre.value, apellido.value, identificacion.value,fileName,fileUrl,visitado.value,tiempo.value);
  
  });
}
const sendEmail = () =>{
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'YOUR_KEY',
        'message': {
          'from_email': 'YOUR_SENDER@example.com',
          'to': [
            {
              'email': 'YOUR_RECEIVER@example.com',
              'name': 'YOUR_RECEIVER_NAME',
              'type': 'to'
            }
          ],
          'subject': 'title',
          'html': 'html can be used'
        }
      }
    });
  
}