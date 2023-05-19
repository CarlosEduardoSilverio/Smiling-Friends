$('.carousel234').slick({
  dots:true
});

$('.Charlie-carousel').slick({
  dots:true
});

$('.carousel').slick({
  dots:true
});

var buttonB = document.getElementById("botao");
var buttonA = document.getElementById("botao");

buttonB.addEventListener("click", function(){
  
  var containerB = document.getElementById("mostrar");

  containerB.classList.toggle("show");
})

buttonA.addEventListener("click", function(){
  
  var containerA = document.getElementById("esconder");

  containerA.classList.toggle("hide");
})

function toggleDropdown() {
  document.getElementById("Inicial").classList.toggle("hide");
}

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show2")) {
//         openDropdown.classList.remove("show2");
//       }
//     }
//   }
// };