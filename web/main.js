function changeContent(selectedValue) {
    contentContainerhog = document.getElementById("prix-change-hog");
    linkchangehog = document.getElementById("link-change-hog");

    contentContainerriot = document.getElementById("all-change-valo");

    contentContainergta = document.getElementById("prix-change-gta");
    linkchangegta = document.getElementById("link-change-gta");

    if (selectedValue === "classique-hog") {
        contentContainerhog.classList.add("fade-out-price");
    setTimeout(() => {
        contentContainerhog.innerHTML = `<p>Prix : </p><p class="old-price">59,99 €</p><p> 210,99 €</p>`;
        contentContainerhog.classList.remove("fade-out-price");
        contentContainerhog.classList.add("fade-in-price");
    }, 500); 
        linkchangehog.classList.add("fade-out");
    setTimeout(() => {
        linkchangehog.innerHTML = `<a href="https://store.epicgames.com/fr/p/hogwarts-legacy">
        <h3>L'héritage de la verru de porc</h3>
        <img src="img/hogwarts.png" alt="Hogwarts Legacy" width=288px height=384px></a>`;
        linkchangehog.classList.add("fade-in");
    }, 500); 
    } 
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
