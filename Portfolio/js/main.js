console.log('Hey! Do you like my work? Feel free to contact me!')

let projectDiv = document.getElementsByClassName("projectdiv");

let divTextAndButton = document.getElementsByClassName('div-text-and-button');

for (let i = 0; i < projectDiv.length; i++) {
    projectDiv[i].addEventListener("mouseover", () => {
        divTextAndButton[i].style.visibility = 'visible';
        })
    projectDiv[i].addEventListener("mouseout", () => {
        divTextAndButton[i].style.visibility = 'hidden';
        console.log(projectDiv[i]);
console.log(divTextAndButton[i]);
        })}
        