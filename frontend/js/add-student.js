/*
ADD STUDENT LOGIC

- Get form data
- Validate fields
- Send POST request
- Show success/error message
*/

const nomInput = document.querySelector("#nom");
const emailInput = document.querySelector("#email");
const prenomInput = document.querySelector("#prenom");
const filiereInput = document.querySelector("#filiere");
const moyenneInput = document.querySelector("#moyenne");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputs = document.querySelectorAll("input");

inputs.forEach((e) => {
  e.addEventListener("input", () => {
    e.nextElementSibling.classList.add("hidden");
  });
});

document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();

  let valid = true;

  if (nomInput.value.trim().length < 3) {
    userName.nextElementSibling.classList.remove("hidden");
    valid = false;
  }
  if (prenomInput.value.trim().length < 3) {
    userName.nextElementSibling.classList.remove("hidden");
    valid = false;
  }
  if (filiereInput.value.trim().length < 3) {
    userName.nextElementSibling.classList.remove("hidden");
    valid = false;
  }

  if (!emailRegex.test(email.value)) {
    email.nextElementSibling.classList.remove("hidden");
    valid = false;
  }

  if (
    Number(moyenneInput.value.length) >= 0 ||
    Number(moyenneInput.value.length <= 20)
  ) {
    password.nextElementSibling.classList.remove("hidden");
    valid = false;
  }

  if (!valid) return;

  const data = {
    nom: nomInput.value,
    email: email.value,
    prenom: prenomInput.value,
    filiere: filiereInput.value,
    moyenne: moyenneInput.value,
  };

  fetch(
    "http://localhost/student_manager/backend/routes/students.php?action=add_student",
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
        alert("Registration successful!");
        document.querySelectorAll("input").value = "";
      } else {
        alert(result.message);
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong");
    });
});
