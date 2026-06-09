fetch("http://localhost/student_manager/backend/routes/students.php")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    if (data.success) {
      console.log(data.data); // your students
    } else {
      alert(data.message);
    }
  })
  .catch((err) => {
    console.error(err);
  });
