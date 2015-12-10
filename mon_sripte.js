function compteur() {
var varJSCPT = document.getElementById("pCpt");
var nombre = parseInt(varJSCPT.innerHTML);
varJSCPT.innerHTML= nombre + 1;
}


function afficherphoto(obj){
console.log("function afficher pĥoto lancée");
if(obj.className == "zoomImage"){
  obj.className = "";
}
else {
  obj.className = "zoomImage";
}
}
