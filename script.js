// chnge the nav style on scroll
window.addEventListener(scroll,function(){
    const navbar = document.getElementById("navbar");
    if(this.window.scrollY > 50) {
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});
//toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

 menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

