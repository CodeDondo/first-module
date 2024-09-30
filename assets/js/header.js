const header = document.getElementById('header');

export default function addHeader() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Morten Redondo Winther';
    header.appendChild(h1);
}

