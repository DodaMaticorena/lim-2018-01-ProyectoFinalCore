window.writeUserVisit = (nombre, apellido, identificacion, visitado, tiempo) => {

    var user = {
        nombre: nombre,
        apellido: apellido,
        identificacion: identificacion,
        visitado: visitado,
        tiempo: tiempo,
        fecha: firebase.database.ServerValue.TIMESTAMP
    };

    // Get a key for a new Post.
    var newUserKey = firebase.database().ref().child('user').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};

    updates['/user/' + newUserKey] = user;

    firebase.database().ref().update(updates);
    return newUserKey;
}