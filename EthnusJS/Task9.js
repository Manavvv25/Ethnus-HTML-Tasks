document.addEventListener("DOMContentLoaded", function () {
    loadUsers();
});

function showRegisterForm() {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("usersTable").classList.add("hidden");
}

function showUsers() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("usersTable").classList.remove("hidden");
    loadUsers();
}

function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;

    if (!name || !email || !contact || !address) {
        alert("All fields are required!");
        return;
    }

    let user = { name, email, contact, address };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully!");
    document.getElementById("registerForm").reset();
}

function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let usersList = document.getElementById("usersList");
    usersList.innerHTML = "";

    users.forEach((user) => {
        let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                    </tr>`;
        usersList.innerHTML += row;
    });
}
