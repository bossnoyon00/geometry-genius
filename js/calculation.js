//Serial no:
let serial = 0;


//First card calculation
document.getElementById('first-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = getElementValueById('first-name');
    const firstInput = document.getElementById('first-input');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('second-input');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);

    // Validation
    if (isNaN(firstInputTotal && secondInputTotal)) {
        return alert('please add a valid number')
    }
    else if (firstInputTotal < 0) {
        return alert('Please add should be a positive number');
    }
    else if (secondInputTotal < 0) {
        return alert('Please add should be a positive number');
    }

    //Calculation
    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);


})

//second card calculation
document.getElementById('second-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = getElementValueById('second-name');

    const firstInput = document.getElementById('rec-input-one');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('rec-input-two');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);

    // Validation
    if (isNaN(firstInputTotal && secondInputTotal)) {
        return alert('please add a valid number')
    }
    else if (firstInputTotal < 0) {
        return alert('Please add should be a positive number');
    }
    else if (secondInputTotal < 0) {
        return alert('Please add should be a positive number');
    }

    //Calculation
    const addCalcu = firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})

//Third card calculation
document.getElementById('third-btn').addEventListener('click', function () {
    serial += 1;

    const firstName = getElementValueById('third-name');
    const firstInputString = getElementValueById('para-input-one');
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = getElementValueById('para-input-two');
    const secondInputTotal = parseFloat(secondInput);

    //Calculation
    const addCalcu = firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})

// //Fourth card calculation
document.getElementById('fourth-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = getElementValueById('fourth-name');

    const firstInput = getElementValueById('rhombus-input-one');
    const firstInputTotal = parseFloat(firstInput);


    const secondInput = getElementValueById('rhombus-input-two');
    const secondInputTotal = parseFloat(secondInput);

    //Calculation
    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})


//Fifth card calculation
document.getElementById('fifth-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = getElementValueById('fifth-name');

    const firstInput = getElementValueById('pen-input-one');
    const firstInputTotal = parseFloat(firstInput);


    const secondInput = getElementValueById('pen-input-two');
    const secondInputTotal = parseFloat(secondInput);


    //Calculation
    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})

//Six card calculation
document.getElementById('six-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = getElementValueById('six-name');

    const firstInput = getElementValueById('ellipse-input-one');
    const firstInputTotal = parseFloat(firstInput);


    const secondInput = getElementValueById('ellipse-input-two');
    const secondInputTotal = parseFloat(secondInput);


    //Calculation
    const addCalcu = Math.PI * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})


//New page Link
document.getElementById('new-page').addEventListener('click', function () {
    location.href = 'blog.html';
})


function getElementValueById(elementId) {
    const element = document.getElementById(elementId).innerText;
    return element;
}


//Create a function to create all <td> element
function createElement(firstName, addCalcu, serial) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${firstName}</td>
    <td>${addCalcu}</td>
    <td> <button class="btn btn-primary">Convert to m2</button> </td>
    `;
    container.appendChild(tr);
}