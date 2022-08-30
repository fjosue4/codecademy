console.log('Hey! Do you like my work? Feel free to contact me!')

const sematicDiv = document.getElementById("sematic");

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

const calaDiv = document.getElementById('cala');

calaDiv.addEventListener('mouseover', () => {
    document.getElementById('cala-title').style.visibility = 'visible';
    document.getElementById('cala-subtitle').style.visibility = 'visible';
})

calaDiv.addEventListener('mouseout', () => {
    document.getElementById('cala-title').style.visibility = 'hidden';
    document.getElementById('cala-subtitle').style.visibility = 'hidden';
})

const explanatoryDiv = document.getElementById('explanatory');

explanatoryDiv.addEventListener('mouseover', () => {
    document.getElementById('explanatory-title').style.visibility = 'visible';
    document.getElementById('explanatory-subtitle').style.visibility = 'visible';
})

explanatoryDiv.addEventListener('mouseout', () => {
    document.getElementById('explanatory-title').style.visibility = 'hidden';
    document.getElementById('explanatory-subtitle').style.visibility = 'hidden';
})

const liveDiv = document.getElementById('live');

liveDiv.addEventListener('mouseover', () => {
    document.getElementById('live-title').style.visibility = 'visible';
    document.getElementById('live-subtitle').style.visibility = 'visible';
})

liveDiv.addEventListener('mouseout', () => {
    document.getElementById('live-title').style.visibility = 'hidden';
    document.getElementById('live-subtitle').style.visibility = 'hidden';
})

const wcDiv = document.getElementById('wc');

wcDiv.addEventListener('mouseover', () => {
    document.getElementById('wc-title').style.visibility = 'visible';
    document.getElementById('wc-subtitle').style.visibility = 'visible';
})

wcDiv.addEventListener('mouseout', () => {
    document.getElementById('wc-title').style.visibility = 'hidden';
    document.getElementById('wc-subtitle').style.visibility = 'hidden';
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
    document.getElementById('atextoweb1-subtitle').style.visibility = 'hidden';
}

// Close Modal
let closeAtextoweb = document.getElementById('close-atextoweb');

closeAtextoweb.onclick = function() {
    document.getElementById('atextoweb-modal').style.display = "none";
}