import listings from './listings.js';
import renderListings from './renderListings.js';

const homeSection = document.querySelector('#listings');
const isHome = homeSection?.dataset.page === 'home';

if (isHome) {
  const randomListings = listings.sort(() => 0.5 - Math.random()).slice(0, 3);
  renderListings(randomListings, homeSection);
}

