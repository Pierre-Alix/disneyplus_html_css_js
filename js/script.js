'use strict'
// Navbar
const barre_nav = document.querySelector(".navbar");
const div2 = document.querySelector(".fond2");

window.addEventListener("scroll",() => {

    const{scrollTop} = document.documentElement;

    if(scrollTop > 700){
        barre_nav.classList.add("active");
    }else{
        barre_nav.classList.remove('active');
    }
})

// Scroll
// Descend lorsqu'on clique sur la flèche d'id bouton_scroll
const bouton_scroll = document.getElementById("bouton_scroll");
bouton_scroll.addEventListener("click",() => {
    window.scrollBy({
        top:710,
        behavior: "smooth"
    });
});



// Question fréquentes
// Déclenche les fonctions toggletext au clic
const button1 = document.querySelector(".ask1");
button1.addEventListener("click",toggletext1);
const button2 = document.querySelector(".ask2");
button2.addEventListener("click",toggletext2);
const button3 = document.querySelector(".ask3");
button3.addEventListener("click",toggletext3);
const button4 = document.querySelector(".ask4");
button4.addEventListener("click",toggletext4);
const button5 = document.querySelector(".ask5");
button5.addEventListener("click",toggletext5);

// Passe les div ask en "active", qui complété par le css, permettent l'affichage des réponses
function toggletext1(){
    button1.classList.toggle("active");
}

function toggletext2(){
    button2.classList.toggle("active");
}

function toggletext3(){
    button3.classList.toggle("active");
}

function toggletext4(){
    button4.classList.toggle("active");
}

function toggletext5(){
    button5.classList.toggle("active");
}
