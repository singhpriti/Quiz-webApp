const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    console.log(window.location.pathname.substr(0,window.location.pathname.length-14));

    if (username && password) {
        alert("You have successfully logged in.");
         var red=`${window.location.pathname.substr(0,window.location.pathname.length-14)}index.html`;
         console.log(red);
        window.location.replace(red);


    } else {
        loginErrorMsg.style.opacity = 1;
    }

})