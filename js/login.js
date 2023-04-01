// step 1: add click event handler with the login button
document.getElementById('btn-submit').addEventListener('click',() => {
//step 2 : get the email address inside the email input field
// always remember to use .value to get text from an input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   
    // for password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === "shahrear@gmail.com" && password === "Shahrear"){
        window.location.href = 'bank.html';
    }else {
        alert('please provide your email && password');
    }
});