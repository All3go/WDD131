import listings from './listings.js';
import renderListingCards from './renderListings.js';

const container = document.querySelector('.listings-grid');
const form = document.getElementById('search-form');

renderListingCards(listings, container);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = document.getElementById('location').value.toLowerCase();
  const minPrice = parseInt(document.getElementById('min-price').value) || 0;
  const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;
  const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;
  const bathrooms = parseInt(document.getElementById('bathrooms').value) || 0;

  const filtered = listings.filter(home => {
    const homePrice = parseInt(home.price.replace(/[^0-9]/g, ''));
    const homeBeds = parseInt(home.beds) || 0;
    const homeBaths = parseInt(home.baths) || 0;

    return (
      home.city.toLowerCase().includes(location) &&
      homePrice >= minPrice &&
      homePrice <= maxPrice &&
      homeBeds >= bedrooms &&
      homeBaths >= bathrooms
    );
  });

  renderListingCards(filtered, container);
});

const locationInput = document.getElementById('location');
const filters = document.getElementById('filters');

locationInput.addEventListener('focus', () => {
  filters.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    filters.classList.remove('active');
  }
});
