// displayInput.js
export default function displayInput() {
    const nav = document.getElementById('navigation');
    const main = document.getElementById('main'); // Div hvor input vises

    // Tjek om input og knap allerede eksisterer
    let input = nav.querySelector('input');
    let button = nav.querySelector('button');

    if (!input) {
        // Hvis input ikke findes, opret det
        input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'skriv her';
        nav.appendChild(input);
    }

    if (!button) {
        // Hvis knappen ikke findes, opret den
        button = document.createElement('button');
        button.textContent = 'slå op';
        nav.appendChild(button);
    }

    // Event listener der viser input i main-diven
    button.addEventListener('click', () => {
        const inputValue = input.value;
        main.textContent = inputValue; // Viser inputværdien i main-diven
    });
}