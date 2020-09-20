/* ----- CREATE STRIPED TOWER
------------------------------------------------ */
let createStripedTower = function() {
    let numberOfTower = 5
    let group = 'stripe';

    // create towers
    createTower(numberOfTower, group);
}

/* ----- CREATE DASHED TOWER
------------------------------------------------ */
let createDashedTower = function() {
    let numberOfTower = 5;
    let group = 'dash';

    // create towers
    createTower(numberOfTower, group);
}


/* ----- CREATE TOWERS
------------------------------------------------ */
function createTower(numberOfTower, group) {
    for (let i = 1; i <= numberOfTower; i++) {
        let tower = document.createElement('div');
        let wrapper = document.querySelector('#wrapper');
        tower.id = `tower-${group}-${i}`;
        tower.className = `tower-${group}`;

        // append tower
        wrapper.appendChild(tower);
    }
}

/* ----- INITIALIZE STRIPED TOWER CREATION
------------------------------------------------ */
let createNewStripedTower = document.addEventListener('load', createStripedTower());
let createNewDashedTower = document.addEventListener('load', createDashedTower());