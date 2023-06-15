<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);

    if(isset($_POST['registrarse'])){
        require_once("RegisterUser.php");

        $registrar = new RegistroUser();

        $registrar-> setIdCamper(1);
        $registrar-> setEmail($_POST['email']);
        $registrar-> setUsername($_POST['username']);
        $registrar-> setPassword($_POST['password']);
        
        
        if($registrar->checkUser($_POST['email'])){
            echo "<script> alert('Usuario ya existe '); document.location='loginRegister.php'</script>";
        }else{
            $registrar-> insertData();
            echo "<script> alert('Usuario registrado satisfactoriamente '); document.location='../Home/home.php'</script>";
        }
    }
?>


