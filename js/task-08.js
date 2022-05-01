const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;
  if (email === "" || password === "") {
    alert("Всі поля мають бути заповнені!");
  } else {
    console.log({ email, password });
    event.target.reset();
  }
});
