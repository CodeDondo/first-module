const nav = document.getElementById('navigation');

export default function addNav() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'skriv her';
    nav.appendChild(input);
    const button = document.createElement('button');
    button.textContent = 'slå op';
    nav.appendChild(button);

    // Tilføj event listener til knappen
    button.addEventListener('click', () => {
        const inputValue = input.value; // Hent værdien fra input-feltet
        console.log('Input værdi:', inputValue); // Vis værdien i konsollen
    });
        console.log('input:', input);
    }