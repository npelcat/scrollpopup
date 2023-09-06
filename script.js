//PopUp condition
let playOnce = true;


window.addEventListener("scroll", () => {
//NavBar effect
    if (window.scrollY > 50) {
            navbar.style.height = "45px";
        } else {
            navbar.style.height = "90px";
        }

//image appearance : le niveau de scroll est a définir en pourcentage car il change en fonction de la taille de l'écran.
// Valeur globale du body : document.body.offsetHeight
// Niveau de scroll : window.scrollY + window.innerHeight (car le scrollY ne va pas jusqu'en bas)

// Stocker le calcul dans une variable :
let scrollValue = 
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;

//Image effect :
//(Récupérer la valeur voulue dans la console : ex 0.45)
    if (scrollValue > 0.45) {
            imgImprovise.style.opacity = 1;
            imgImprovise.style.transform = "none";
        }

//Pop-up effect
    if (scrollValue > 0.85 && playOnce) {
            popup.style.opacity = 1;
            popup.style.transform = "none";
            playOnce = false;
    }
});

//Pop-up disappear
closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";
})


// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
