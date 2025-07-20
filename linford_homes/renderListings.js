// renderListings.js
export default function renderListings(listings, container) {
  container.innerHTML = ""; // Clear any existing content

  listings.forEach(listing => {
    const card = document.createElement("div");
    card.className = "listing-card";

    card.innerHTML = `
      <img src="${listing.image}" alt="Home in ${listing.city}" />
      <h3>${listing.city}</h3>
      <p>${listing.price}</p>
      <p>${listing.beds} Bed / ${listing.baths} Bath</p>
    `;

    container.appendChild(card);
  });
}
