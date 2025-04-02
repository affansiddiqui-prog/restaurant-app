let callSection = document.getElementById('main')
del = () => {
    callSection.style.display = 'none'
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closeModals() {
    closeModal('loginPopup');
    closeModal('signupPopup');
}
function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (email !== "" && password !== "") {
        Swal.fire({
            title: "Login Successful!",
            text: "Welcome back!",
            icon: "success",
            confirmButtonText: "OK"
        });

        // Remove login & sign up buttons
        document.querySelector(".login").style.display = "none";
        document.querySelector(".sign").style.display = "none";

        // Extract username from email (before "@")
        let userName = email.split("@")[0]; 

        // Display user's name with icon
        document.getElementById("userName").innerHTML = userName;
        document.getElementById("userNav").style.display = "inline"; 

        closeModal("loginPopup");
    } else {
        Swal.fire({
            title: "Error",
            text: "Please enter email and password!",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
}
