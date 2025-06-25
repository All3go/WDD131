function renderRecipeCards(recipes, container) {
    recipes.sort((a, b) => a.name.localeCompare(b.name));
    recipes.forEach((recipe) => {  
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        // Image
        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.name;
        card.appendChild(image);

        // Info container
        const info = document.createElement("div");
        info.classList.add("recipe-info");

        // Tag (first tag only, optional)
        if (recipe.tags && recipe.tags.length > 0) {
            const tag = document.createElement("div");
            tag.classList.add("tag");
            tag.textContent = recipe.tags[0];
            info.appendChild(tag);
        }

        // Title
        const title = document.createElement("a");
        title.href = "#";
        title.classList.add("recipe-title");
        title.textContent = recipe.name;
        info.appendChild(title);

        // Rating
        const rating = document.createElement("div");
        rating.classList.add("rating");
        const stars = Math.floor(recipe.rating);
        const half = recipe.rating % 1 >= 0.5;
        rating.innerHTML = "⭐".repeat(stars) + (half ? "½" : "") + "☆".repeat(5 - stars - (half ? 1 : 0));
        info.appendChild(rating);

        // Description
        const desc = document.createElement("p");
        desc.classList.add("description");
        desc.textContent = recipe.description;
        info.appendChild(desc);

        card.appendChild(info);
        container.appendChild(card);
        });
    }

export default renderRecipeCards;