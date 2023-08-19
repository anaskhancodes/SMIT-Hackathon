


const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBA2CZKGofi2Ecb0lG4eK86a9o9FjQwfKA",
        authDomain: "hyt-signup-login.firebaseapp.com",
        projectId: "hyt-signup-login",
        storageBucket: "hyt-signup-login.appspot.com",
        messagingSenderId: "66344204779",
        appId: "1:66344204779:web:d788265d1d29c23049c1ae",
        measurementId: "G-TZQ3JFYYFP"
    });
  
  // Initialize Firebase
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  console.log();
  
  
  //////   log in page ////////
  
  const logIn = document.getElementById("login-form-btn");
  
  logIn.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector(".login-email-input").value;
    const password = document.querySelector(".login-password-input").value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Signed in 
      // alert("Your successfully log In")
      window.location.href = "./CRUD/crud.html";
      // ...
    })
    .catch((error) => {
      alert("error try again")
      console.log(error.code);
      console.log(error.message);
    });
  });
  


function logout(){
    firebase.auth().signOut()
}



//   const signup = document.getElementById("signup-form-btn");
  
//   signup.addEventListener("click", (event) => {
//     event.preventDefault();
//     const email = document.querySelector(".signup-email-input").value;
//     const password = document.querySelector(".signup-password-input").value;
//     const firstName = document.querySelector(".first-name").value;
//     const lastName = document.querySelector(".last-name").value;
  
//     firebase
//       .auth().createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in 
//         // alert("user created")
//         const user = userCredential.user;
//         window.location.href = "../Blogging/index.html";
  
//         // ...
//       })
//       .catch((error) => {
//         let errorCode = error.code;
//         let errorMessage = error.message;
//         alert(errorMessage)
//         // ..
//       });;
//     document.querySelector(".signup-email-input").value = "";
//     document.querySelector(".signup-password-input").value = "";
//     document.querySelector(".first-name").value = "";
//     document.querySelector(".last-name").value = "";
//   });