const main = document.getElementById('main');

export default function createMain(){
    const addMain = document.createElement('p');
    addMain.textContent = 'Et javascript modul er en kode der er delt op i fragmenter';
    main.appendChild(addMain);
    const addMain2 = document.createElement('a');
    addMain2.href = 'https://youtu.be/qgRUr-YUk1Q?si=Z3ePgvhLH_cekl-N';
    addMain2.textContent = 'Se mere her:';
    main.appendChild(addMain2);
};