let nameOne = document.getElementsByTagName('input')[0];

let age = document.getElementsByTagName('input')[1];

let birthMonth = document.getElementsByTagName('input')[2];

let submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', displayPassword);

function displayPassword(){
        let passwordGenerated = [];
        let nameOneValue = nameOne.value;
        let birthMonthValue = birthMonth.value;
        let ageValue = age.value;
        passwordGenerated.push(ageValue);
        passwordGenerated.push(nameOneValue);
        passwordGenerated.push(birthMonthValue);
        let finalPassword = passwordGenerated.join('');

        alert(`${nameOneValue} your generated password is ${finalPassword}`);

}
