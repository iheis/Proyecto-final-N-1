
let $texAsmel = document.getElementById("contenidoAsmel");
let $txtRyh = document.getElementById("contenidoRyh");
let $txtProaudio = document.getElementById("contenidoProaudio");
let $txtFrimsa = document.getElementById("contenidoFrimsa");
let $txtAprevide = document.getElementById("contenidoAprevide");

let $asmel = document.getElementById("asmel");
let $ryh = document.getElementById("ryh");
let $proaudio = document.getElementById("proAudio");
let $frimsa = document.getElementById("frimsa");
let $aprevide = document.getElementById("aprevide");

$asmel.addEventListener("click", function() {
    $texAsmel.classList.toggle('hide')
})

$ryh.addEventListener("click", function() {
    $txtRyh.classList.toggle('hide') 
})

$proaudio.addEventListener("click", function() {
    $txtProaudio.classList.toggle('hide') 
})

$frimsa.addEventListener("click", function() {
    $txtFrimsa.classList.toggle('hide') 
})

$aprevide.addEventListener("click", function() {
    $txtAprevide.classList.toggle('hide') 
})




