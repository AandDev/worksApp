const worksBtn = document.querySelectorAll('.work-btn');
const vocalesCont = document.querySelector('.vocales');

const sentences = [
    ['Avión', 'Aire', 'Agua'],
    ['Empanada', 'Ensalada', 'Estación'],
    ['Iglesia', 'Internet', 'Imagen'],
    ['Opera', 'Oceano', 'Oreja'],
    ['Unión', 'Uva', 'Umami']
];
const colors = ['#FFD600', '#2bdd52', '#2EADF4', '#CD2EF4', '#F42E2E'];


worksBtn.forEach((workBtn, index) => {
    workBtn.addEventListener('click', () => {
        const examplesBox = document.createElement('div');
        examplesBox.classList.add('examples');
        examplesBox.innerHTML = 
        `
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${sentences[index][0]}
            </button>
        </div>
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${sentences[index][1]}
            </button>
        </div>
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${sentences[index][2]}
            </button>
        </div>
        `;
        //vocalesCont.appendChild(examplesBox);
        if(vocalesCont.hasChildNodes){
            vocalesCont.removeChild(vocalesCont.lastChild);
            vocalesCont.appendChild(examplesBox);
        } else {
            vocalesCont.appendChild(examplesBox);
        }
    })
})