function whatsapp(){

window.open("https://wa.me/244946026923");

}

function toggleDark(){

document.body.classList.toggle("dark");

}


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


document.querySelectorAll(".fade").forEach(el=>{

observer.observe(el);

});
