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