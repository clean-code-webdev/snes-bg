/* ----- CREATE SMALL CLOUDS
------------------------------------------------ */
let createMountain = function() {
    let numberOfMountain = 3
    let wrapper = document.querySelector('#wrapper');

    for (let i = 1; i <= numberOfMountain; i++) {
        let newMountain = document.createElement('div');
        let mountain = `
        <div class="mountain" id="mountain-${i}">
            <div class="side-1"></div>
            <div class="side-2"></div>
            <div class="side-3"></div>
        </div>`;

        newMountain.innerHTML = mountain;
        wrapper.appendChild(newMountain);
    }
}

/* ----- CREATE DIMONDS
------------------------------------------------ */
let createDimond = function() {
    let numberOfDimond = 8;
    let wrapper = document.querySelector('#wrapper');


    for (let i = 1; i <= numberOfDimond; i++) {
        let newDimond = document.createElement('div');
        newDimond.className = `diamond diamond-${i}`;

        wrapper.appendChild(newDimond);
    }
}



/* ----- INITIALIZE CLOUD CREATION
------------------------------------------------ */
let createNewMountains = document.addEventListener('load', createMountain());
let createNewDimonds = document.addEventListener('load', createDimond());