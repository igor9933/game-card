import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
     const gameSection = document.querySelector('.game-section_container');

     gameSection.innerHTML = '';
     title.textContent = 'выбор сложности';
     title.classList.add('game-menu__title');
     document.querySelector('.confetti').innerHTML = '';

     const createDifficuButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu__difficult-btn');

        button.textContent = `${difficult} карт`;

        button.addEventListener('click', () => startGame(difficult));

        return button;
     }

     gameSection.append(
        title,
        createDifficuButton(10),
        createDifficuButton(12),
        createDifficuButton(14),
        createDifficuButton(16),
     )
}