import recipes from './recipes.js';
import renderRecipeGallery from './recipecard_mod.js';

function getRandomListEntry(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function init() {
  const gallery = document.getElementById('recipe-gallery');
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipeGallery([randomRecipe], gallery);
}

init();

function filterRecipes(query) {
  query = query.toLowerCase();
  return recipes
    .filter(recipe =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(query)) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(query))
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const input = document.querySelector('#search-form input[type="search"]');
  const query = input.value;
  const gallery = document.getElementById('recipe-gallery');
  gallery.innerHTML = ''; // clear old recipes
  const filtered = filterRecipes(query);
  renderRecipeGallery(filtered, gallery);
}

document.getElementById('search-form').addEventListener('submit', searchHandler);
