// // import {  getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// // import { firestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBA2CZKGofi2Ecb0lG4eK86a9o9FjQwfKA",
    authDomain: "hyt-signup-login.firebaseapp.com",
    projectId: "hyt-signup-login",
    storageBucket: "hyt-signup-login.appspot.com",
    messagingSenderId: "66344204779",
    appId: "1:66344204779:web:d788265d1d29c23049c1ae",
    measurementId: "G-TZQ3JFYYFP"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();
let button = document.getElementById("button");
button.addEventListener("click", function () {
    // Get the values of the title and text fields
    const tittle = document.getElementById("tittle").value;
    const text = document.getElementById("input").value;

    // Add the new message to the database
    db.collection("Blogs")
        .add({
            timestamp: timestamp,
            tittle: tittle,
            text: text,
            // userId: userId
        })
        .then(() => {
            console.log("Message added successfully");
            rendermsg(); // Refresh the messages
        })
        .catch((error) => {
            console.error("Error adding message:", error);
        });

    // Clear input fields
    document.getElementById("tittle").value = "";
    document.getElementById("input").value = "";
});




document.addEventListener("DOMContentLoaded", function () {
    rendermsg();
});





function editPoll(docId) {
    currentUser = auth.currentUser; // Assign the current user to the global variable
    if (!currentUser) {
        alert("Please log in to edit this post.");
        return;
    }

    // Get the post document using the provided docId
    db.collection("Blogs")
        .doc(docId)
        .get()
        .then((doc) => {
            // Get the data from the post document
            const data = doc.data();

            // Check if the current user is the author of the post
            if (currentUser.uid === data.userId) {
                const updatedMessage = prompt("Enter the updated message:");
                if (updatedMessage !== null) {
                    db.collection("Blogs")
                        .doc(docId)
                        .update({
                            message: updatedMessage
                        })
                        .then(() => {
                            console.log("Document updated with ID:", docId);
                            rendermsg(); // Refresh the posts to update the UI
                        })
                        .catch((error) => {
                            console.error("Error updating poll:", error);
                        });
                }
            } else {
                // If the current user is not the author, show an alert
                alert("You are not authorized to edit this post.");
            }
        })
        .catch((error) => {
            console.error("Error fetching document from Firestore: ", error);
        });
}

function rendermsg() {
    const container = document.querySelector(".main");

    db.collection("Blogs")
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
            container.innerHTML = ""; // Clear existing content

            if (querySnapshot.empty) {
                container.innerText = "No chat found";
            } else {
                const reversedDocs = querySnapshot.docs.reverse();

                reversedDocs.forEach((doc) => {
                    const data = doc.data();

                    // Create a new div for the blog post
                    const blogPostDiv = document.createElement("div");
                    blogPostDiv.className = "blog-post"; // Add your desired class name

                    // Create and set the content for the blog post
                    const titleElement = document.createElement("h2");
                    titleElement.innerText = data.tittle;
                    blogPostDiv.appendChild(titleElement);

                    const textElement = document.createElement("p");
                    textElement.innerText = data.text;
                    blogPostDiv.appendChild(textElement);

                    const timestampElement = document.createElement("p");
                    timestampElement.innerText = data.timestamp;
                    blogPostDiv.appendChild(timestampElement);

                    const img = document.createElement("img");
                    img.src = data.img; // Assuming 'data.img' holds the URL of the image
                    blogPostDiv.appendChild(img);


                    // Append the blog post div to the container
                    container.appendChild(blogPostDiv);
                });
            }
        })
        .catch((error) => {
            console.error("Error fetching chat:", error);
        });
}















// function logOut() {
//     firebase
//         .auth()
//         .signOut()
//         .then(() => {
//             console.log("Sign out successful");
//             // Redirect to the sign-in page or any other desired destination
//             window.location.href = "./login/index.html";
//         })
//         .catch((error) => {
//             console.log("Sign out error:", error);
//         });
// }

// firebase.auth().onAuthStateChanged(function (user) {
//     if (!user) {
//         window.location.href = "./login/index.html"
//         console.log("not signed in");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     render();
// });