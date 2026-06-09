<?php

<?php


// USER MODEL
class users{
    private $conn;
    public function __constract($database){
        $this->conn=$database;
    }
    public function createUser($username,$email,$password,$created_at){
        $sql = "insert into users (username,email,password,created_at)
        values(?,?,?,?,?)";
        $stm = $this->conn->prepare($sql);
        return $stm->execute([$username,$email,$password,$created_at]);
    }
  
    public function findById($id){
           $stm = $this->conn ->query("select *  from student where id=?");
            $stm->excute([$id]);
        return $stm->fetch(PDO::FETCH_ASSOC);
    }
    public function findByEmail($email){
           $stm = $this->conn ->prepare("select *  from student where email=?");
           $stm->excute([$email]);
        return $stm->fetch(PDO::FETCH_ASSOC);
    }
   
}

// Methods:

// - findByEmail()
// - findById()

// Responsible only for database queries
// related to users
// */
/*
USER MODEL

Methods:
- createUser()
- findByEmail()
- findById()

Responsible only for database queries
related to users
*/