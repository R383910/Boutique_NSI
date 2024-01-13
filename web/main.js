function changeContent(selectedValue) {
    contentContainerhog = document.getElementById("prix-change-hog");
    linkchangehog = document.getElementById("link-change-hog");

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
        <img src="img/hogwarts-modified.png" alt="Hogwarts Legacy" width=288px height=384px></a>`;
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
        <img src="img/hogwarts-modified.png" alt="Hogwarts Legacy" width=288px height=384px></a>`;
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
        <img src="img/gta-premium-modified.jpg" alt="GTA V" width=288px height=384px></a>`;
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
        <img src="img/gta-premium-modified.jpg" alt="GTA V" width=288px height=384px></a>`;
        linkchangegta.classList.add("fade-in");
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
    }, 500);
}
