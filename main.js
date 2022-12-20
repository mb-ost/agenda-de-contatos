const tbody = document.querySelector('tbody');
const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const contact_names = [];
const contact_numbers = [];
const addContactForm = document.getElementById('form-add-contato');
const totalContacts = document.getElementById('totalContacts');

addContactForm.addEventListener('submit', function(e){
    e.preventDefault();

    if (addContact()) {
        renderTable();
    }
});

function renderTable() {
    let tableHTML = '';
    for (i in contact_names) {
        tableHTML += `<tr><td>${contact_names[i]}</td><td>${contact_numbers[i]}</td></tr>`;
    }

    tbody.innerHTML = tableHTML;
    totalContacts.innerHTML = contact_names.length
}

function addContact() {
    if (!validateName(inputName.value)) {
        alert(`Nome ${inputName.value} não está completo`);
        return false;
    }
    if (!(removeNaN(inputNumber.value) > 99999999)) {
        alert("Número de telefone invalido");
        return false;
    }
    if (contact_names.includes(inputName.value)) {
        alert(`Nome ${inputName.value} já foi adicionado`);
        return false;
    }
    if (contact_numbers.includes(inputNumber.value)) {
        alert(`Numero ${inputNumber.value} já foi adicionado`);
        return false;
    }
    contact_names.push(inputName.value);
    contact_numbers.push(inputNumber.value);
    return true;
}

function validateName(fullName) {
    const nameArray = fullName.split(' ');
    return nameArray.length >= 2;
}

function removeNaN(value) {
    let resValue = '';
    for (i = 0; i < value.length; i++) {
        if (!(value[i] == '+' || value[i] == ' ' || value[i] == '-' || value[i] == '(' || value[i] == ')')) {
            resValue += value[i];
        }
    }
    console.log(resValue);
    return resValue;
}