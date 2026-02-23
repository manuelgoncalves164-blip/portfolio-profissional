window.onload = () => {

document.getElementById("loader").style.display = "none";

};


function abrirWhatsApp(){

window.open(
"https://wa.me/244946026923",
"_blank"
);

}


function toggleDarkMode(){

document.body.classList.toggle("dark");

}


function toggleMenu(){

document.getElementById("nav").classList.toggle("active");

}


function reveal(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{

let windowHeight = window.innerHeight;

let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", reveal);
