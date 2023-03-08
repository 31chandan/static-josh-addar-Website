var lineIcon = document.getElementById("lineicon");
var cross = document.getElementById("cross");


lineIcon.onclick = function(){
    document.getElementById("CrossPage").style.display= "flex";
}

cross.onclick = function(){
    document.getElementById("CrossPage").style.display= "none";
}