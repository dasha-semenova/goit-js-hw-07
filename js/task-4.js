const regForm = document.querySelector(".login-form");

regForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
      return alert("All form fields must be filled in");
    }

    const userInfo = {
        email,
        password
    }
    return console.log(userInfo);

    form.reset();
}