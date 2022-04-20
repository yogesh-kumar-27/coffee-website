let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
   if(window.scrollY > 0){
      header.classList.add('active');
   }
   else{
      header.classList.remove('active');
   }
}

let sr = ScrollReveal({
   origin: "top",
   distance: "60px",
   duration: 2500,
   delay: 400,
   reset: true,
 });
 sr.reveal(".header");
 sr.reveal(".home", { delay: 900 });
 sr.reveal(".about", { delay: 900 });
 sr.reveal(".menu", { delay: 1000 });
 sr.reveal(".gallery", { delay: 1000 });
 sr.reveal(".team", { delay: 1000 });
 sr.reveal(".contact", { delay: 1000 });
 sr.reveal(".footer", { delay: 1500, origin: "bootom" });