function validateForm() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("pass").value;
  var mailformat = /[a-z0-9-.]+@([htcinc]{6})+.[a-z]{2,3}$/;
  var passw = /^[A-Za-z0-9]\w{7,14}$/;
  const name_error = document.getElementById("error_name")
  const password_error = document.getElementById("error_pass")

  if (name == '') {
    name_error.innerHTML = ("Username Required")
  }
  else if (!name.match(mailformat)) {
    name_error.innerHTML = ('Enter your Credential mail')

  }
  else {
    name_error.innerHTML = ("")
    console.log(name)
    localStorage.setItem('name',name)

  }


  if (password == '') {
    password_error.innerHTML = ("Password Required")
  }
  else if (!password.match(passw)) {
    password_error.innerHTML = ("Check password")
  }
  else if (name != "" && password != "") {
    localStorage.setItem = ("password",password)
    password_error(window.location = "../index.html");

  }

}

