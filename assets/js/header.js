const header = document.getElementById('header');

export default function createHeader(){
    const addheader = document.createElement('h1');
    addheader.textContent = 'mine første moduler';
    header.appendChild(addheader);
}