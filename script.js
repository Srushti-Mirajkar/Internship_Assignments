function validateLogin() {
    let email = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");

    let valid = true;

    if (email.value === "") {
        email.classList.add("invalid");
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        valid = false;
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
        document.getElementById("emailError").innerText = "";
    }

    if (password.value.length < 6) {
        password.classList.add("invalid");
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        valid = false;
    } else {
        password.classList.remove("invalid");
        password.classList.add("valid");
        document.getElementById("passwordError").innerText = "";
    }

    return valid;
}

function validateRegister() {
    let valid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("regEmail");
    let password = document.getElementById("regPassword");
    let phone = document.getElementById("phone");

    if (name.value === "") {
        name.classList.add("invalid");
        document.getElementById("nameError").innerText = "Please enter your name.";
        valid = false;
    } else {
        name.classList.add("valid");
        document.getElementById("nameError").innerText = "";
    }

    if (!email.value.includes("@")) {
        email.classList.add("invalid");
        document.getElementById("regEmailError").innerText = "Please enter a valid email address.";
        valid = false;
    } else {
        email.classList.add("valid");
        document.getElementById("regEmailError").innerText = "";
    }

    if (password.value.length < 6) {
        password.classList.add("invalid");
        document.getElementById("regPasswordError").innerText = "Password must be at least 6 characters long.";
        valid = false;
    } else {
        password.classList.add("valid");
        document.getElementById("regPasswordError").innerText = "";
    }

    if (!/^[0-9]{10}$/.test(phone.value)) {
        phone.classList.add("invalid");
        document.getElementById("phoneError").innerText = "Please enter a valid phone number.";
        valid = false;
    } else {
        phone.classList.add("valid");
        document.getElementById("phoneError").innerText = "";
    }

    return valid;
}
