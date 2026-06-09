const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const id = new URLSearchParams(window.location.search).get("id");
const btn = document.querySelector("#modifyBtn");

fetch(`http://localhost/backend/routes/students.php?id=${id}`)
  .then((response) => response.json())
  .then((student) => {
    document.getElementById("nom").value = student.nom;
    document.getElementById("prenom").value = student.prenom;
    document.getElementById("email").value = student.email;
    document.getElementById("filiere").value = student.filiere;
    document.getElementById("moyenne").value = student.moyenne;
  });

async function updateStudent(student) {
  fetch("http://localhost/backend/routes/students.php", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href("./students.html");
    });
}

btn.addEventListener("click", () => {
  e.preventDefault();

  let valid = true;

  if (nomInput.value.trim().length < 3) {
    nomInput.nextElementSibling.classList.remove("hidden");
    valid = false;
  }
  if (prenomInput.value.trim().length < 3) {
    prenomInput.nextElementSibling.classList.remove("hidden");
    valid = false;
  }
  if (filiereInput.value.trim().length < 3) {
    filiereInput.nextElementSibling.classList.remove("hidden");
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
    moyenneInput.nextElementSibling.classList.remove("hidden");
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

  updateStudent(data);
});
