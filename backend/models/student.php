<?php
require_once("../config/database.php");


// STUDENT MODEL
class student{
    private $conn;
    public function __constract($database){
        $this->conn=$database;
    }
    public function createStudent($nom,$prenom,$email,$filiere,$moyenne){
        $sql = "insert into students (nom,prenom,email,filiere,moyenne)
        values(?,?,?,?,?)";
        $stm = $this->conn->prepare($sql);
        return $stm->execute([$nom,$prenom,$email,$filiere,$moyenne]);
    }
    public function getAllStudents(){
        $stm = $this->conn ->query("select *  from student");
        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getStudentById($id){
           $stm = $this->conn ->query("select *  from student where id=$id");
        return $stm->fetch(PDO::FETCH_ASSOC);
    }
    public function updateStudent($nom,$prenom,$email,$filiere,$moyenne){
           $stm = $this->conn ->prepare("update student
           set nom=? , prenom=?  , email=? , filiere=?, moyenne=?");
        return $stm->execute([$nom,$prenom,$email,$filiere,$moyenne]);
    }
    public function deleteStudent($id){
         $stm = $this->conn ->prepare("delete from students where id= ? ");
         return $stm->execute([$id] );
    }
}








