const sematicDiv = document.getElementById("sematic");
console.log(sematicDiv)

sematicDiv.addEventListener('mouseover', () => {
    document.getElementById('sematic-title').style.visibility = 'visible';
    document.getElementById('sematic-subtitle').style.visibility = 'visible';
})

sematicDiv.addEventListener('mouseout', () => {
    document.getElementById('sematic-title').style.visibility = 'hidden';
    document.getElementById('sematic-subtitle').style.visibility = 'hidden';
})

const atextoLandingDiv = document.getElementById('atextolanding');

atextoLandingDiv.addEventListener('mouseover', () => {
    document.getElementById('atextolanding-title').style.visibility = 'visible';
    document.getElementById('atextolanding-subtitle').style.visibility = 'visible';
})

atextoLandingDiv.addEventListener('mouseout', () => {
    document.getElementById('atextolanding-title').style.visibility = 'hidden';
    document.getElementById('atextolanding-subtitle').style.visibility = 'hidden';
})

const atextoWebDiv = document.getElementById('atexto-web');

atextoWebDiv.addEventListener('mouseover', () => {
    document.getElementById('atextoweb-title').style.visibility = 'visible';
    document.getElementById('atextoweb-subtitle').style.visibility = 'visible';
})

atextoWebDiv.addEventListener('mouseout', () => {
    document.getElementById('atextoweb-title').style.visibility = 'hidden';
    document.getElementById('atextoweb-subtitle').style.visibility = 'hidden';
})

// Open Modal

sematicDiv.onclick = function() {
    document.getElementById('sematic-modal').style.display = "block";
    document.getElementById('sematic-title').style.visibility = 'hidden';
    document.getElementById('sematic-subtitle').style.visibility = 'hidden';
}

// Close Modal
let closeSematic = document.getElementById('close-sematic');

closeSematic.onclick = function() {
    document.getElementById('sematic-modal').style.display = "none";
}

// Open Modal

atextoLandingDiv.onclick = function() {
    document.getElementById('atextolanding-modal').style.display = "block";
    document.getElementById('atextolanding-title').style.visibility = 'hidden';
    document.getElementById('atextolanding-subtitle').style.visibility = 'hidden';
}

// Close Modal
let closeAtextolanding = document.getElementById('close-atextolanding');

closeAtextolanding.onclick = function() {
    document.getElementById('atextolanding-modal').style.display = "none";
}

// Open Modal

atextoWebDiv.onclick = function() {
    document.getElementById('atextoweb-modal').style.display = "block";
    document.getElementById('atextoweb-title').style.visibility = 'hidden';
    document.getElementById('atextoweb-subtitle').style.visibility = 'hidden';
}

// Close Modal
let closeAtextoweb = document.getElementById('close-atextoweb');

closeAtextoweb.onclick = function() {
    document.getElementById('atextoweb-modal').style.display = "none";
}