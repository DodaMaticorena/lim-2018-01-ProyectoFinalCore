const nextRegistrar = document.querySelector("#registrate");
const iniciarSesión = document.querySelector("#iniciarSesión");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

nextRegistrar.addEventListener("click",()=>{
  window.location.assign("index.html");
})

iniciarSesión.addEventListener('click',() =>{
  signInUser(email.value, password.value);
})

window.onload = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location.assign('admin.html')
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
    } else {
      console.log('No user is signed in.');

    }
  });
}


