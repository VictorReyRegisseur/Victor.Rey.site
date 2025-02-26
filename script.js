console.log("Le script.js est bien chargé !");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM entièrement chargé !");
    
    let homeSection = document.getElementById("home-section");
    let aboutSection = document.getElementById("about-section");
    let workSection = document.getElementById("work-section");
    let researchSection = document.getElementById("research-section");
    let contactSection = document.getElementById("contact-section");
    let gallerySection = document.getElementById("gallery-section");
    let backToHomeButton = document.getElementById("back-to-home");

    let sections = [aboutSection, workSection, researchSection, contactSection, gallerySection];


    // Fonction pour basculer entre les sections
    function toggleSection(section) {
        if (!section) return;
        
        let isAlreadyVisible = section.classList.contains("active");

        sections.forEach(sec => {
            sec.classList.remove("active");
            sec.style.display = "none";
        });

        homeSection.style.display = "none";

        if (!isAlreadyVisible) {
            section.classList.add("active");
            section.style.display = "flex";
            backToHomeButton.style.display = "block";
        }
    }

    // Ajout des événements aux boutons
    function setupButton(id, section) {
        let button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                toggleSection(section);
            });
        } else {
            console.warn(`Bouton ${id} introuvable`);
        }
    }

    setupButton("about-button", aboutSection);
    setupButton("work-button", workSection);
    setupButton("research-button", researchSection);
    setupButton("contact-button", contactSection);
    setupButton("gallery-button", gallerySection);

    if (backToHomeButton) {
        backToHomeButton.addEventListener("click", function () {
            sections.forEach(sec => {
                sec.classList.remove("active");
                sec.style.display = "none";
            });

            homeSection.style.display = "flex";
            backToHomeButton.style.display = "none";
        });
    } else {
        console.warn("Le bouton 'Retour à l'accueil' est introuvable.");
    }

});
