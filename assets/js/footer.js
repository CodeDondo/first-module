const footer = document.getElementById('footer');

export default function createFooter(){
    const addFooter = document.createElement('h1');
    addFooter.textContent = 'Morten Redondo Winther';
    footer.appendChild(addFooter);
}