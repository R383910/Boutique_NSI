// Script des Formulaires des jeux :
    function changeContent(selectedValue) {

    // Variable permettant de retrouver les catégories de formulaire dans le code
    contentContainerhog = document.getElementById("prix-change-hog");
    linkchangehog = document.getElementById("link-change-hog");

    contentContainerriot = document.getElementById("all-change-valo");

    contentContainergta = document.getElementById("prix-change-gta");
    linkchangegta = document.getElementById("link-change-gta");


    // On vérifie l'option du formulaire qui a été entré
    // Pas besoin de faire des fonctions différentes pour chaque formulaire
    if (selectedValue === "classique-hog") {
        contentContainerhog.classList.add("fade-out-price");
    setTimeout(() => {
        // Une fois l'option selectionnée on change le code HTML : ici on change le prix et on ajoute des animations puis on rajoute un Timeout pour que l'annimation ait le teps de se faire
        contentContainerhog.innerHTML = `<p>Prix : </p><p class="old-price">59,99 €</p><p> 210,99 €</p>`;
        contentContainerhog.classList.remove("fade-out-price");
        contentContainerhog.classList.add("fade-in-price");
    }, 500); 
        linkchangehog.classList.add("fade-out");
    setTimeout(() => {
        // Ici on change l'image et le Titre du jeu puis on utilise les même animation rajouté précédement
        // On est obligé de faire cette partie en 2 fois car lorsque le programme JS regarde le HTML, il utilise seulement la variable concernant la partie du code inclut dans le formulaire
        // Il faut donc créer 2 vaariable pour changer les 2 parties du code que l'ont veux modifier
        linkchangehog.innerHTML = `<a href="https://store.epicgames.com/fr/p/hogwarts-legacy">
        <h3>L'héritage de la verru de porc</h3>
        <img src="img/hogwarts.png" alt="Hogwarts Legacy" width=288px height=384px></a>`;
        linkchangehog.classList.add("fade-in");
    }, 500); 
    }
    // On répète le même processus avec d'autre options
    else if (selectedValue === "deluxe-hog") {
        contentContainerhog.classList.add("fade-out-price");
    setTimeout(() => {
        contentContainerhog.innerHTML = `<p>Prix : </p><p class="old-price">999,99 €</p><p> 1579,99 €</p>`;
        contentContainerhog.classList.remove("fade-out-price");
        contentContainerhog.classList.add("fade-in-price");
    }, 500);
        linkchangehog.classList.add("fade-out");
    setTimeout(() => {
        linkchangehog.innerHTML = `<a href="https://store.epicgames.com/fr/p/hogwarts-legacy">
        <h3>L'héritage de la verru de porc</h3>
        <img src="img/hogwarts-deluxe.jpg" alt="Hogwarts Legacy" width=288px height=384px></a>`;
        linkchangehog.classList.add("fade-in");
    }, 500); 
    }
    // On répète le même processus avec d'autre options
    else if(selectedValue === "classique-gta"){
        contentContainergta.classList.add("fade-out-price");
    setTimeout(() => {
        contentContainergta.innerHTML = `<p>Prix : </p><p class="old-price">199,99 €</p><p> 508,99 €</p>`;
        contentContainergta.classList.remove("fade-out-price");
        contentContainergta.classList.add("fade-in-price");
    }, 500);
        linkchangegta.classList.add("fade-out");
    setTimeout(() => {
        linkchangegta.innerHTML = `<a href="https://store.epicgames.com/fr/p/grand-theft-auto-v">
        <h3>Grand vol d'auto V</h3>
        <img src="img/gta.jpg" alt="GTA V" width=288px height=384px></a>`;
        linkchangegta.classList.add("fade-in");
    },500);
    }
    // On répète le même processus avec d'autre options
    else if(selectedValue === "deluxe-gta"){
        contentContainergta.classList.add("fade-out-price");
    setTimeout(() => {
        contentContainergta.innerHTML = `<p>Prix : </p><p class="old-price">899,99 €</p><p> 1879,99 €</p>`;
        contentContainergta.classList.remove("fade-out-price");
        contentContainergta.classList.add("fade-in-price");
    }, 500);
        linkchangegta.classList.add("fade-out");
    setTimeout(() => {
        linkchangegta.innerHTML = `<a href="https://store.epicgames.com/fr/p/grand-theft-auto-v">
        <h3>Grand vol d'auto V</h3>
        <img src="img/gta-premium.jpg" alt="GTA V" width=288px height=384px></a>`;
        linkchangegta.classList.add("fade-in");
    },500);
    }
    // Ici comme on change tout le jeu on utilise uniquement une varible qui prend en compte toute la div ou est situé le jeu puis on change tout le code
    // Les même animations sont utilisées
    else if (selectedValue === "valo") {
        contentContainerriot.classList.add("fade-out");
    setTimeout(() => {
        contentContainerriot.innerHTML = `<div class="pres-game">
        <a href="https://store.epicgames.com/fr/p/valorant">
            <h3>Toxic shooter</h3>
            <img src="img/valo.jpg" alt="Valorant" width=288px height=384px>
        </a>
    </div>
    <div class="info-game" >
        <p class="grss">Espace requis : 28 Go</p>
        <nav class="grss">Version :
            <select onchange="changeContent(this.value)">......
                <option value="valo" selected>Classique</option>
                <option value="lol">Très toxique</option>
            </select>
        </nav>                
        <div class="grss"><p>Prix : </p><p class="old-price">Gratuit</p><p> 79,99 €</p></div>
    </div>`;
        contentContainerriot.classList.remove("fade-out");
        contentContainerriot.classList.add("fade-in");
    },500);
    }
    // On répète le même processus que pour le "else" précédent
    else if (selectedValue === "lol") {
        contentContainerriot.classList.add("fade-out");
    setTimeout(() => {
        contentContainerriot.innerHTML = `<div class="pres-game">
        <a href="https://store.epicgames.com/fr/p/league-of-legends">
            <h3>La douche est loin</h3>
            <img src="img/lol.jpg" alt="Lol" width=288px height=384px>
        </a>
    </div>
    <div class="info-game" >
        <p class="grss">Espace requis : 12 Go</p>
        <nav class="grss">Version :
            <select onchange="changeContent(this.value)">......
                <option value="valo">Toxique</option>
                <option value="lol" selected>Très toxique</option>
            </select>
        </nav>                
        <div class="grss"><p>Prix : </p><p class="old-price">Gratuit</p><p> Votre âme suffira</p></div>
    </div>`;
        contentContainerriot.classList.remove("fade-out");
        contentContainerriot.classList.add("fade-in");
    },500);
    }

    // On prend en compte tout les timeout pour les enlever à la fin de l'action
    setTimeout(() => {
        linkchangehog.classList.remove("fade-in");
        linkchangegta.classList.remove("fade-in");
        linkchangehog.classList.remove("fade-out");
        linkchangegta.classList.remove("fade-out");

        contentContainerhog.classList.remove("fade-in-price");
        contentContainergta.classList.remove("fade-in-price");
        contentContainerhog.classList.remove("fade-out-price");
        contentContainergta.classList.remove("fade-out-price");
        contentContainerriot.classList.remove("fade-out");
        contentContainerriot.classList.remove("fade-in");
    }, 500);
}

    // Ici on sélectionne une option de base lorsque l'on recharge la page
    versionSelectgta = document.getElementById('ver-ch');
    window.addEventListener('popstate', function () {
        versionSelectgta.value = 'classique-gta';
    });

    versionSelecttox = document.getElementById('tox');
    window.addEventListener('popstate', function () {
        versionSelecttox.value = 'valo';
    });

    versionSelecthog = document.getElementById('hog');
    window.addEventListener('popstate', function () {
        versionSelecthog.value = 'classique-hog';
    });



// Script du menu déroulant :

    // Ici on regarde si la checkbox du menu déroulant est coché et si oui on empêche le déroulement de l'arrière plan sans le déroulement du menu
    // Pour empêcher que lorsqu'on défile de le menu on affiche a la place du bandeau du site la partie jeu

    toggleCheckbox = document.getElementById('toggle');

    toggleCheckbox.addEventListener('change', function() {
        if (toggleCheckbox.checked) {
            console.log('La checkbox est cochée.');
            document.body.style.overflow = 'hidden';
        } else {
            console.log('La checkbox n\'est pas cochée.');
            document.body.style.overflow = 'visible';

        }
    });


