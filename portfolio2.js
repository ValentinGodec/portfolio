
var expsElement = document.getElementById("exps");
var boutons_modele = document.querySelectorAll(".modal_open");

document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Vous devrez ajuster ces valeurs en fonction de votre mise en page
    var accueilPosition = document.getElementById('accueil').offsetTop;
    var infosPosition = document.getElementById('mesinfos').offsetTop;
    var projetsPosition = document.getElementById('mesprojets').offsetTop;
    var cvPosition = document.getElementById('moncv').offsetTop;
    var contactPosition = document.getElementById('contact').offsetTop;

    // Supprimer la classe active de tous les onglets
    var onglets = document.querySelectorAll('#onglets a onglet');
    onglets.forEach(function (onglet) {
        onglet.classList.remove('actif');
    });

    // Ajouter la classe active à l'onglet correspondant à la section visible
    if (scrollPosition >= accueilPosition && scrollPosition < infosPosition) {
        document.querySelector('#onglets a[href="#accueil"] onglet').classList.add('actif');
    } else if (scrollPosition >= infosPosition && scrollPosition < projetsPosition) {
        document.querySelector('#onglets a[href="#mesinfos"] onglet').classList.add('actif');
    } else if (scrollPosition >= projetsPosition && scrollPosition < cvPosition) {
        document.querySelector('#onglets a[href="#mesprojets"] onglet').classList.add('actif');
    } else if (scrollPosition >= cvPosition && scrollPosition < contactPosition) {
        document.querySelector('#onglets a[href="#moncv"] onglet').classList.add('actif');
    } else{
        document.querySelector('#onglets a[href="#contact"] onglet').classList.add('actif');
    }
});

boutons_modele.forEach(function(btn){
    btn.onclick = function(){
        var modele = btn.getAttribute("data-modal");
        document.getElementById(modele).style.display = "block";
    };
});


var fermer = document.querySelectorAll(".modal_close");

fermer.forEach(function(btn){
    btn.onclick=function(){
        var modele = (btn.closest(".modal").style.display="none");
    };
});

window.onclick = function(){
    if(expsElement.target.classname === "modal"){
        expsElement.target.style.display = "none";
    }
};

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if(name == "Escape"){
        fermer.forEach(function(btn){
            var modele = (btn.closest(".modal").style.display="none");
        });
    };
}, false);


document.addEventListener("DOMContentLoaded", function () {
    var progressBar = document.getElementById("activate_progress");
    var progress = advances.getElementsByTagName("span");

    // Fonction pour déclencher l'animation lorsque la barre de progression est visible
    function startProgressBarAnimation() {
        progress[0].style.paddingLeft = "70%";
        progress[1].style.paddingLeft = "70%";
        progress[2].style.paddingLeft = "60%";
        progress[3].style.paddingLeft = "40%";
    }

    // Observer l'intersection pour déterminer quand la barre de progression est visible
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Lorsque la barre de progression est visible, déclencher l'animation
                startProgressBarAnimation();
                // Arrêter d'observer après le déclenchement de l'animation
                observer.disconnect();
            }
        });
    });

    // Observer la barre de progression
    observer.observe(progressBar);
});