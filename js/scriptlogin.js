let eyeicons = document.getElementById("eyeicon")
let password = document.getElementById("inputpassword")

eyeicons.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicons.src = "../img/63568.png";

    } else {
        password.type = "password";
        eyeicons.src = "../img/1647554-200.png";
    }
}
