const formEl = document.querySelector(".login-form");
const onFormElSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All the fields must be filled in!");
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  event.currentTarget.reset();
};
formEl.addEventListener("submit", onFormElSubmit);
