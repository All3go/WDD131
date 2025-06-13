const character = {
      name: "Houba of Eropus",
      class: "Druid: Circle of Spores",
      level: 3,
      health: 30,
      image: 'houba.jpg',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

function updateCharacterDisplay() {
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
  if (character.health > 0) {
    document.getElementById('log').textContent = '';
  }
}

// Button event listeners
document.getElementById('attacked').addEventListener('click', () => {
  character.attacked();
  updateCharacterDisplay();
});

document.getElementById('levelup').addEventListener('click', () => {
  character.levelUp();
  updateCharacterDisplay();
});

window.onload = updateCharacterDisplay;
