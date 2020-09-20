/* ----- CREATE BUSHES
------------------------------------------------ */
let createBush = function() {

    let numberOfBush = 15;
    let frontBush = document.createElement('div');
    let backBush = document.createElement('div');
    frontBush.className = 'front-bush-front';
    backBush.className = 'front-bush-back';

    for (let i = 1; i <= numberOfBush; i++) {
        let newFrontBush = document.createElement('div');
        let newBackBush = document.createElement('div');

        newFrontBush.className = `bush-${i}`;
        newBackBush.className = `bush-${i}`;

        // append bushes
        frontBush.appendChild(newFrontBush);
        backBush.appendChild(newBackBush);
    }

    document.body.appendChild(backBush);
    document.body.appendChild(frontBush);
}

/* ----- INITIALIZE BUSH CREATION
------------------------------------------------ */
let createNewBush = document.body.addEventListener('load', createBush());