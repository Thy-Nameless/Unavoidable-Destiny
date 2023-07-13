<?php
//ini_set('display_errors',0);
session_start();
/*if (!isset($_SESSION['user'])) {
    $location = 'index';
    include 'php/checkForUser.php';
}*/
?>
<!DOCTYPE html>
<html lang="en">
<head>

    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script src="script/jquery.js"></script>
    <script src="script/jquery-ui.js"></script>
    <script src="script/main.js"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    
    <!--<script src="script/cookieconsent.min.js" defer></script><script>window.addEventListener("load",function(){window.wpcc.init({"border":"thin","corners":"small","colors":{"popup":{"background":"#ffe4e1","text":"#000000","border":"#c25e5e"},"button":{"background":"#c25e5e","text":"#ffffff"}},"position":"bottom","content":{"href":"https://eravate.es/cookiepolicy.php"}})});</script>-->

    <title>ItalOS</title>
    <link rel="icon" type="image/x-icon" href="/image/logo.png">
</head>
<body class="loader">
    <main>
        <div id='desktop'>
            <div class='deskapp'><div class='deskappShadow'>
                <div id='birdle' class='deskicon'></div>
                <div class='desktext'>Birdle</div>
            </div></div>
            <div class='deskapp'><div class='deskappShadow'>
                <div id='message' class='deskicon'></div>
                <div class='desktext'>Messages</div>
            </div></div>
            <div class='deskapp'><div class='deskappShadow'>
                <div id='calendar' class='deskicon'></div>
                <div class='desktext'>Calendar</div>
            </div></div>
            <div class='deskapp'><div class='deskappShadow'>
                <div id='note' class='deskicon'></div>
                <div class='desktext'>Notes</div>
            </div></div>
            <div class='deskapp'><div class='deskappShadow'>
                <div id='wiki' class='deskicon'></div>
                <div class='desktext'>Wikipedia</div>
            </div></div>
        </div>
        <div id='osmenu'>
            
        </div>
        <div id='taskbar'>
            <div id='osoutline'>
                <div id='osbutton'>
                    <div id='osicon'>
                    </div>
                    <div id='ostext'>
                        START
                    </div>
                </div>
            </div>
            <div id='appicons'>

            </div>
        </div>
        <div id='hideosmenu'>
            
        </div>
    </main>
    <script src="script/mainend.js"></script>
</body>
</html>