<?php
header("Content-Type: text/javascript");

echo file_get_contents("smasher.js.src/THREE/Shaders/CopyShader.js");
echo file_get_contents("smasher.js.src/THREE/Shaders/DotScreenShader.js");
echo file_get_contents("smasher.js.src/THREE/Shaders/RGBShiftShader.js");
echo file_get_contents("smasher.js.src/THREE/Shaders/FXAAShader.js");

echo file_get_contents("smasher.js.src/THREE/EffectComposer.js");
echo file_get_contents("smasher.js.src/THREE/RenderPass.js");
echo file_get_contents("smasher.js.src/THREE/MaskPass.js");
echo file_get_contents("smasher.js.src/THREE/ShaderPass.js");

echo file_get_contents("smasher.js.src/Global.js");
?>
(function(_NS_){
<?php

echo file_get_contents("smasher.js.src/Core.js");

echo file_get_contents("smasher.js.src/Objects/SmartObject.js");

echo file_get_contents("smasher.js.src/Core/Viewport.js");
echo file_get_contents("smasher.js.src/Core/ObjectPicker.js");
echo file_get_contents("smasher.js.src/Smasher/SmasherWindow.js");

echo file_get_contents("smasher.js.src/Smasher/Objects/LHCDipole.js");
echo file_get_contents("smasher.js.src/Smasher/Objects/LHCRing.js");

echo file_get_contents("smasher.js.src/Init.js");

?>
})(M);