function init(){
 var entryInput = document.getElementById("entryinput");
 var entryButton = document.getElementById("entrybutton");
 var textOutput = document.getElementById("textoutput");


 entryButton.addEventListener("click", function() {
    var text = entryInput.value;
    alert("John Kruder: " + text);
    textOutput.textContent = text;

 });
}


window.addEventListener("load", init);
