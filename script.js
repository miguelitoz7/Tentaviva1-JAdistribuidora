var fev = document.getElementById("feve");
var jan = document.getElementById("jane");

jan.addEventListener("click", function () {
  fev.style.display = "none";
});

function toggle(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none") {
    document.getElementById(el).style.display = "block";
  } else {
    document.getElementById(el).style.display = "none";
  }
}
