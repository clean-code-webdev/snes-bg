/* ----- CREATE SMALL CLOUDS
------------------------------------------------ */
let createSmallClouds = function() {
    let numberOfClouds = 4;

    for (let i = 1; i <= numberOfClouds; i++) {
        let cloud = `<div class="cloud" id="cloud-${i}">
    <div class="circle-1"></div>
    <div class="circle-2">
        <div class="eyes-black">
            <div class="eyes-white"></div>
        </div>
        <div class="eyes-black">
            <div class="eyes-white"></div>
        </div>
    </div>
    <div class="circle-3"></div>
    </div>`;

        // append clouds
        newCloud(cloud);
    }
}

/* ----- CREATE BIG CLOUDS
------------------------------------------------ */

let createBigClouds = function() {
    let numberOfClouds = 2

    for (let i = 1; i <= numberOfClouds; i++) {
        console.log(i)
        let cloud = `<div id="big-cloud-${i}">
                                <div class="big-cloud-1"></div>
                                <div class="big-cloud-2"></div>
                                <div class="big-cloud-3"></div>
                                <div class="big-cloud-4"></div>
                            </div>`;

        // append clouds
        newCloud(cloud);
    }
}

/* ----- APPEND CLOUDS
------------------------------------------------ */

function newCloud(cloud) {
    let newCloud = document.createElement('div');
    let wrapper = document.querySelector('#wrapper');
    newCloud.innerHTML = cloud;
    wrapper.appendChild(newCloud);
}



/* ----- INITIALIZE CLOUD CREATION
------------------------------------------------ */
let createNewSmallClouds = document.addEventListener('load', createSmallClouds());
let createNewBigClouds = document.addEventListener('load', createBigClouds());