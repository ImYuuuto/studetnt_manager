/*
- Send POST request
- Handle response
- Show messages
*/
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputs = document.querySelectorAll("input");

inputs.forEach((e) => {
  e.addEventListener("input", () => {
    e.nextElementSibling.classList.add("hidden");
  });
});

submitBtn
  .addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;
    if (userName.value.trim().length < 3) {
      userName.nextElementSibling.classList.remove("hidden");
      valid = false;
    }
    if (!emailRegex.test(email.value)) {
      email.nextElementSibling.classList.remove("hidden");
      valid = false;
    }
    if (password.value.length < 5) {
      password.nextElementSibling.classList.remove("hidden");
      valid = false;
    }
    if (valid) {
      const data = {
        userName: userName,
        email: email,
        password: password,
      };
      fetch(
        "http://localhost/student_manager/backend/routes/auth.php?action=register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      )
        .then((respone) => respone.json())
        .then((result) => {
          console.log(result);
        });
      if (result.success) {
        alert("Registration successful!");
        window.location.href = "./login.html";
      } else {
        alert(result.message);
      }
    }
  })
  .catch((error) => {
    console.error(error);
    alert("something went wrong");
  });
