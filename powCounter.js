const score = document.getElementById('score');
const ignoreScore = document.getElementById('ignore-score');
const heroPoint = document.getElementById('hero-point');
const vilainPoint = document.getElementById('vilain-point');
const pileTable = document.getElementById('stack');
const btnAddHero = document.getElementById('btn-add-hero');
const btnAddVilain = document.getElementById('btn-add-vilain');
const heroStackBox = document.getElementById('hero-stack') || [];
const vilainStackBox = document.getElementById('vilain-stack') || [];
const heroStack = document.getElementsByClassName('input-hero');
const vilainStack = document.getElementsByClassName('input-vilain');


const countPoint = () => {
    let hScore = 0;
    let vScore = 0;
    let hScoreIgnore = 0;

    for (p of heroStack) {
        hScore += Number(p.value);
    }
    heroPoint.innerHTML = hScore;

    for (p of vilainStack) {
        vScore += Number(p.value);
    }
    vilainPoint.innerHTML = vScore;
    
    if (heroStack.length > vilainStack.length) {
        for (let i = vilainStack.length; i < heroStack.length; i++) {
            hScoreIgnore += Number(heroStack[i].value);
        };
    }

    ignoreScore.innerText = hScoreIgnore;
    score.innerText = (hScore - hScoreIgnore) - vScore;
}

const addNodeInput = (name, stackBox) => {
    const newEl = document.createElement("input");
    newEl.type = 'text';
    newEl.className = `input-${name}`;
    newEl.addEventListener('input', countPoint);
    stackBox.appendChild(newEl);
}


btnAddVilain.addEventListener('click', (e) => {
    addNodeInput('vilain', vilainStackBox)
})


btnAddHero.addEventListener('click', (e) => {
    addNodeInput('hero', heroStackBox);
})