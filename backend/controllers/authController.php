<?php

/*
AUTH CONTROLLER

Handles:
- Registration
- Login
- Logout

Validates request data

Calls User model methods

Returns JSON responses
*/
<?php
require_once("../config/database.php");
require_once("../models/student.php");
require_once("../models/User.php");

$userModel = new user($pdo);





