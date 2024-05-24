// script.js
document.getElementById('changePaletteButton').addEventListener('click', function(event) {
  // Previene el comportamiento predeterminado
  event.preventDefault();

  // Define la paleta de colores original y la nueva
  const originalPalette = {
    '--color-oscuro': '#0E1116',
    '--color-azul': '#374A67',
    '--color-gris': '#616283',
    '--color-cafe-oscuro': '#9E7B9B',
    '--color-cafe': '#CB9CF2'
  };

  const newPalette = {
    '--color-oscuro': '#000F08',
    '--color-azul': '#1C3738',
    '--color-gris': '#4D4847',
    '--color-cafe-oscuro': '#F4FFF8',
    '--color-cafe': '#8BAAAD'
  };

  // Verifica la paleta actual y alterna entre las dos
  const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-oscuro').trim();
  const isOriginal = currentColor === originalPalette['--color-oscuro'];

  const paletteToApply = isOriginal ? newPalette : originalPalette;

  // Aplica los colores de la paleta seleccionada
  for (const [variable, value] of Object.entries(paletteToApply)) {
    document.documentElement.style.setProperty(variable, value);
  }
});
