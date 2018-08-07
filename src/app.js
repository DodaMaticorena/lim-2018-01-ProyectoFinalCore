window.writeUserVisit = (nombre, apellido, identificacion,fileName,fileURL, visitado, tiempo) => {

    var user = {
        nombre: nombre,
        apellido: apellido,
        identificacion: identificacion,
        imagenNombre:fileName,
        imagenURL:fileURL,
        visitado: visitado,
        tiempo: tiempo
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