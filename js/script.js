
    function myFunction() {
  var x = document.getElementById("links-holder");
  var firstLine = document.getElementById("first-line");
  var secondLine = document.getElementById("second-line");
  var thirdLine = document.getElementById("third-line");
  if (x.style.transform === "translate(0px, 0%)") {
    
    x.style.transform = "translate(0px, -200%)"
    
    firstLine.style.transform = "translate(0px, 0px) rotate(0deg)";
    secondLine.style.opacity = "1";
    thirdLine.style.transform = "translate(0px, 0px) rotate(0deg)";
  } else {
 
    x.style.transform = "translate(0px, 0%)"
    firstLine.style.transform = "translate(0px, 6px) rotate(-45deg)";

    thirdLine.style.transform = "translate(0px, -8px) rotate(45deg)";
    secondLine.style.opacity = "0";
  }
}


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
