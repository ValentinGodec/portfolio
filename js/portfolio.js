
var expsElement = document.getElementById("exps");
var boutons_modele = document.querySelectorAll(".modal_open");

document.addEventListener("DOMContentLoaded", function() {
    var ongletLinks = document.querySelectorAll('.onglet-link');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        document.querySelectorAll('.section').forEach(function(section) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                var sectionId = section.getAttribute('id');
                setActiveOnglet(sectionId);
            }
        });
    });

    function setActiveOnglet(sectionId) {
        ongletLinks.forEach(function(link) {
            var href = link.getAttribute('href').substring(1);
            if (href === sectionId) {
                link.querySelector('.onglet').classList.add('active');
            } else {
                link.querySelector('.onglet').classList.remove('active');
            }
        });
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
        progress[0].style.paddingLeft = "60%";
        progress[1].style.paddingLeft = "70%";
        progress[2].style.paddingLeft = "50%";
        progress[3].style.paddingLeft = "30%";
        progress[4].style.paddingLeft = "15%";
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
