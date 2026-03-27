function generatePassword() {
  let length = document.getElementById("length").value;
  let result = document.getElementById("result");

  if (length < 4) {
    result.innerText = "Enter at least 4 characters!";
    return;
  }

  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  result.innerText = password;
}