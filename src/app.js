window.writeUserData = (uid, nombre, apellido, identificacion, sexo, nombreTrabajador) => {

    var postData = {
        uid: uid,
        nombre: nombre,
        apellido: apellido,
        identificacion: identificacion,
        sexo: sexo,
        nombreTrabajador: nombreTrabajador,
        fecha: firebase.database.ServerValue.TIMESTAMP
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    firebase.database().ref().update(updates);
    return newPostKey;
}