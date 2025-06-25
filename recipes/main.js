import  recipes  from './recipes.js';
import renderRecipeGallery from './recipecard_mod.js';

const gallery = document.getElementById('recipe-gallery');
renderRecipeGallery(recipes, gallery);