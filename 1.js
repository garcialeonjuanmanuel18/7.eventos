const h1 = document.getElementById("h1");
const p = document.getElementById("p");

h1.addEventListener("click", ocultar);

function ocultar(event){
   if(p.style.display === none){
      p.style.display = "block";
   } else {
      p.style.display = "none";
   }
   
}