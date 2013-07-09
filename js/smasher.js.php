<?php
header("Content-Type: text/javascript");

echo file_get_contents("smasher.js.src/Global.js");
?>
(function(_NS_){
<?php

echo file_get_contents("smasher.js.src/Core.js");

echo file_get_contents("smasher.js.src/Objects/SmartObject.js");

echo file_get_contents("smasher.js.src/Core/Viewport.js");
echo file_get_contents("smasher.js.src/Smasher/SmasherWindow.js");

echo file_get_contents("smasher.js.src/Init.js");

?>
})(M);