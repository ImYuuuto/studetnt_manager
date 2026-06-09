/*
LOGIN LOGIC
- Handle success/error
- Redirect to dashboard
*/

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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let valid = true;

  if (!emailRegex.test(email.value)) {
    email.nextElementSibling.classList.remove("hidden");
    valid = false;
  }

  if (password.value.length < 5) {
    password.nextElementSibling.classList.remove("hidden");
    valid = false;
  }

  if (!valid) return;

  const data = {
    email: email.value,
    password: password.value,
  };

  fetch(
    "http://localhost/student_manager/backend/routes/auth.php?action=login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      if (result.success) {
        alert("Login successful!");
        window.location.href = "./dashboard.html";
      } else {
        alert(result.message);
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong");
    });
});
