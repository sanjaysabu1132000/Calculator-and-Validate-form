function validateForm() {
  // reset error message

  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmError").innerText = "";
  //  get from value
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  // validation  condition
  if (username.length < 3) {
    document.getElementById("usernameError").innerText =
      "please enter atleast 3 letter";
    return false;
  }
  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password atleast contain 6 charector";
    return false;
  }
  if (password !== confirm) {
    document.getElementById("confirmError").innerText =
      "Password doesnot match";
    return false;
  }
  return true;
}
