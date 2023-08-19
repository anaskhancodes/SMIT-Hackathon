// Get the "Sign Out" link element by its id
const signOutLink = document.getElementById("signOutLink");

// Add a click event listener to the link
signOutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Show a SweetAlert confirmation popup
    Swal.fire({
        title: "Sign Out",
        text: "Are you sure you want to sign out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, sign me out!",
    }).then((result) => {
        if (result.isConfirmed) {
            // If the user confirms, redirect to the sign-out page
            window.location.href = "../index.html"; // Replace with the actual sign-out page URL
        }
    });
});
