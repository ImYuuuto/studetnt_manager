const avgGrade = document.querySelector("#avgGrade");
const totalStudents = document.querySelector("#totalStudents");

fetch(
  "http://localhost/student_manager/backend/routes/students.php?action=stats",
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    if (data.success) {
      avgGrade.textContent = data.avgGrade;
      totalStudents.textContent = data.totalStudents;
    } else {
      alert(data.message);
    }
  })
  .catch((err) => {
    console.error(err);
  });
