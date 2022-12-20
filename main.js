const tbody = document.querySelector('tbody');
const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const contact_names = [];
const contact_numbers = [];
const addContactForm = document.getElementById('form-add-contato');

addContactForm.addEventListener('submit', function(e){
    e.preventDefault();

    addContact();
    renderTable();
});

function renderTable() {
    let tableHTML = '';
    for (i in contact_names) {
        tableHTML += `<tr><td>${contact_names[i]}</td><td>${contact_numbers[i]}</td></tr>`;
    }

    tbody.innerHTML = tableHTML;
}

function addContact() {
    if (!validateName(inputName.value)) {
        alert(`Nome ${inputName.value} não está completo`);
        return false;
    }
    if (!(removeNaN(inputNumber.value) > 9999999999)) {
        return false;
    }
    contact_names.push(inputName.value);
    contact_numbers.push(inputNumber.value);
}

function validateName(fullName) {
    const nameArray = fullName.split(' ');
    return nameArray.length >= 2;
}

function removeNaN(value) {
    for (i = 0; i < value.length; i++) {
        if (value[i] == '+' ) {
            value.replace('+', '');
        }
        if (value[i] == ' ' ) {
            value[i] = '';
        }
        if (value[i] == '-' ) {
            value[i] = '';
        }
        if (value[i] == '(' ) {
            value[i] = '';
        }
        if (value[i] == ')' ) {
            value[i] = '';
        }
        console.log(value[i]);
    }
    console.log(value);
}