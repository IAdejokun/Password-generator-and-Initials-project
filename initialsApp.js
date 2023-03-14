let initials = document.querySelector('input');

let subButton = document.querySelector('button')

subButton.addEventListener('click', getAndAlert);

function getAndAlert() {
    let initialsValue = initials.value;
   
    let nameArr = initialsValue.split(' ');

    let firstName = nameArr[0].toUpperCase();
    let lastName = nameArr[1].toUpperCase();

    let firstInitial = firstName[0];
    let lastInitial = lastName[0];

    let fullInitial = [];
    fullInitial.push(firstInitial);
    fullInitial.push(lastInitial);

    let newInitial = fullInitial.join(' . ');

    alert(`${initialsValue} Your initial are ${newInitial}!`);





}

