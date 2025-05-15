const menuButton = document.querySelector(".menu");
function toggleMenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("hide");
    }

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("nav");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector('.gallery');
const viewer = document.querySelector('.viewer'); // now a <dialog>
const viewerImage = viewer.querySelector('img');
const closeButton = viewer.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const fullSrc = e.target.src.replace("norris-sm.jpeg", "norris-full.jpeg");
    viewerImage.src = fullSrc;
    viewer.showModal(); // show the native dialog
  }
});

closeButton.addEventListener('click', () => {
  viewer.close(); // hide the dialog
});
