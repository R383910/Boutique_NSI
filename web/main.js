function changeContent(selectedValue) {
    contentContainerhog = document.getElementById("prix-change-hog");
    linkchangehog = document.getElementById("link-change-hog");

    contentContainergta = document.getElementById("prix-change-gta");
    linkchangegta = document.getElementById("link-change-gta");

    if (selectedValue === "classique-hog") {
        contentContainerhog.innerHTML = `<p>Prix : </p><p class="old-price">59,99 €</p><p> 210,99 €</p>`;
        linkchangehog.innerHTML = `<a href="https://store.epicgames.com/fr/p/hogwarts-legacy">
        <h3>L'héritage de la verru de porc</h3>
        <img src="img/hogwarts.png" alt="Hogwarts Legacy" width=288px height=384px>
    </a>`;
    } 
    else if (selectedValue === "deluxe-hog") {
        contentContainerhog.innerHTML = `<p>Prix : </p><p class="old-price">1099,99 €</p><p> 1579,99 €</p>`;
        linkchangehog.innerHTML = `<a href="https://store.epicgames.com/fr/p/hogwarts-legacy">
        <h3>L'héritage de la verru de porc</h3>
        <img src="img/hogwarts.png" alt="Hogwarts Legacy" width=288px height=384px>
    </a>`;
    } 
    else if(selectedValue === "classique-gta"){
        contentContainergta.innerHTML = `<p>Prix : </p><p class="old-price">1099,99 €</p><p> 1579,99 €</p>`;
        linkchangegat.innerHTML = `<a href="https://store.epicgames.com/fr/p/grand-theft-auto-v">
        <h3>Grand vol d'auto V</h3>
        <img src="img/gta.jpg" alt="GTA V" width=288px height=384px>
    </a>`;
    }
    else if(selectedValue === "deluxe-gta"){
        contentContainergta.innerHTML = `<p>Prix : </p><p class="old-price">199,99 €</p><p> 508,99 €</p>`;
        linkchangegta.innerHTML = `<a href="https://store.epicgames.com/fr/p/grand-theft-auto-v">
        <h3>Grand vol d'auto V</h3>
        <img src="img/gta-premium.jpg" alt="GTA V" width=288px height=384px>
    </a>`;
    }
}
