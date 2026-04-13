const cards = document.querySelectorAll(".cards");
cards.forEach(card => {
    card.addEventListener("click", ()=> {
     const recipe = card.getAttribute("data-recipe");
     window.location.href = `make.html?name=${recipe}`;
    });
});
