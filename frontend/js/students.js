/*
STUDENTS PAGE LOGIC
- Refresh table after changes
*/
const tableBody = document.querySelector("tbody");

function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach((el) => {
    tableBody.innerHTML += `<tr>
                  <td>${el.id}</td>
                  <td>${el.nom}</td>
                  <td>${el.prenom}</td>
                  <td>${el.email}</td>
                  <td>${el.email}</td>
                  <td>${el.avg}</td>
                  <td class="text-center">
                    <a class="btn btn-warning btn-sm me-2" href="./modifyStudent.html?id${el.id}">Edit</button>

                    <button class="btn btn-danger btn-sm" data-id="${el.id}" onclick="deleteStudent()">Delete</button>
                  </td>
                </tr>`;
  });
}

async function getStudents() {
  await fetch(
    "http://localhost/student_manager/backend/routes/students.php?action=allStudents",
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.success) {
        renderTable(data);
      } else {
        alert(data.message);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
async function deleteStudent(e) {
  fetch("http://localhost/backend/routes/students.php", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: e.target.dataset.id,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  getStudents();
}
