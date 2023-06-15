<?php
    if(isset($_POST['guardar'])){
        require_once("Estudiante.php");

        $config = new Estudiante();

        $config-> setNombres($_POST['nombres']);
        $config-> setDireccion($_POST['direccion']);
        $config-> setLogros($_POST['logros']);
        $config-> setSer($_POST['ser']);
        $config-> setIngles($_POST['ingles']);
        $config-> setReview($_POST['review']);
        $config-> setSkills($_POST['skills']);
        $config-> setEspecialidad($_POST['especialidad']);

        $config-> insertData();

        echo "<script> alert('Los datos se guardaron satisfactoriamente'); document.location='estudiantes.php'</script>";

    }
?>