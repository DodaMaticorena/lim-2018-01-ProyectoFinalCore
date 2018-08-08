const cardCheck=document.querySelector(".card-deck");
const signOut=document.querySelector("#signOut");

signOut.addEventListener('click',() =>{
    firebase.auth().signOut().then(function () {
          window.location.assign('sesion.html')
        })

})
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let userId = firebase.auth().currentUser.uid;
     firebase.database().ref().child('user').once('value', userKey => {
        cardUser(userKey, userId);
        // console.log(userKey);
        // console.log(userId);
      })
    } else {
      console.log('No user is signed in.');

    }
  });

const cardUser = (userKey,userId) =>{
    userKey.forEach(user => {
        let cardId = user.key;
            createUser(cardId, user, userId);
         
      })
}

const createUser= (cardId, user, userId) =>{
    console.log(cardId);
    console.log(user.val());
    console.log(userId);
cardCheck.innerHTML +=
`
<div class="card">
    <img class="card-img-top" src="${user.val().imagenURL}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Visitante</h5>
        <p class="card-text">Nombre: ${user.val().nombre}</p>
        <p class="card-text">Apellido: ${user.val().apellido}</p>
        <p class="card-text">Identificación: ${user.val().identificación}</p>
        <p class="card-text">Tiempo: ${user.val().tiempo}</p>
        <p class="card-text">Motivo: ${user.val().motivo}</p>
    </div>
</div>
`   
}