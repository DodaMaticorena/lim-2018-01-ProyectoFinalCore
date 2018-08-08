window.signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      window.location.assign('admin.html')
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };
  
window.writeUserVisit = (nombre, apellido, identificacion,fileName,fileURL, visitado, tiempo,motivo) => {

    var user = {
        nombre: nombre,
        apellido: apellido,
        identificacion: identificacion,
        imagenNombre:fileName,
        imagenURL:fileURL,
        visitado: visitado,
        tiempo: tiempo,
        motivo:motivo
        };

    // Get a key for a new Post.
    var newUserKey = firebase.database().ref().child('user').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};

    updates['/user/' + newUserKey] = user;
console.log(tiempo)
    firebase.database().ref().update(updates);
    return newUserKey;
}