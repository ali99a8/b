var username = document.querySelector(".in_username"),
    pass = document.queryCommandIndeterm(".in_pass");
var login__submit = document.querySelector(".login__submit");
login__submit.onclick = function() {

    if (username.value === "admin" || pass.value === "admin") {
        window.open("login.html", "_parent");

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The username or password is incorrect!',
        })
    }
}