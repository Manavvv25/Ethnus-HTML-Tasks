document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let website = document.getElementById("website");
    let message = document.getElementById("message");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let websiteError = document.getElementById("websiteError");
    let messageError = document.getElementById("messageError");

    // Name validation
    if (name.value.trim() === "") {
        nameError.style.display = "inline";
        name.classList.add("error-border");
        isValid = false;
    } else {
        nameError.style.display = "none";
        name.classList.remove("error-border");
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "inline";
        email.classList.add("error-border");
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("error-border");
    }

    // Website URL validation
    let urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(website.value.trim())) {
        websiteError.style.display = "inline";
        website.classList.add("error-border");
        isValid = false;
    } else {
        websiteError.style.display = "none";
        website.classList.remove("error-border");
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.style.display = "inline";
        message.classList.add("error-border");
        isValid = false;
    } else {
        messageError.style.display = "none";
        message.classList.remove("error-border");
    }

    if (!isValid) {
        event.preventDefault();
    }
});
