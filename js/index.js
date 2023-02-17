let serial = 0;
document.getElementById('first-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = document.getElementById('first-name').innerText;

    const firstInput = document.getElementById('first-input');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('second-input');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);
    if (isNaN(firstInputTotal && secondInputTotal)) {
        return alert('please add a valid number')
    }
    else if (firstInputTotal < 0) {
        return alert('Please add should be a positive number');
    }
    else if (secondInputTotal < 0) {
        return alert('Please add should be a positive number');
    }
    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})
document.getElementById('second-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = document.getElementById('second-name').innerText;

    const firstInput = document.getElementById('rec-input-one');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('rec-input-two');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);
    if (isNaN(firstInputTotal && secondInputTotal)) {
        return alert('please add a valid number')
    }
    else if (firstInputTotal < 0) {
        return alert('Please add should be a positive number');
    }
    else if (secondInputTotal < 0) {
        return alert('Please add should be a positive number');
    }
    const addCalcu = firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})
document.getElementById('third-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = document.getElementById('third-name').innerText;

    const firstInput = document.getElementById('para-input-one');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('para-input-two');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);

    const addCalcu = firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})
document.getElementById('fourth-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = document.getElementById('fourth-name').innerText;

    const firstInput = document.getElementById('rhombus-input-one');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('rhombus-input-two');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);

    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})
document.getElementById('fifth-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = document.getElementById('fifth-name').innerText;

    const firstInput = document.getElementById('pen-input-one');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('pen-input-two');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);

    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})
document.getElementById('six-btn').addEventListener('click', function () {
    serial += 1;
    const firstName = document.getElementById('six-name').innerText;

    const firstInput = document.getElementById('ellipse-input-one');
    const firstInputString = firstInput.value;
    const firstInputTotal = parseFloat(firstInputString);


    const secondInput = document.getElementById('ellipse-input-two');
    const secondInputString = secondInput.value;
    const secondInputTotal = parseFloat(secondInputString);

    const addCalcu = Math.PI * firstInputTotal * secondInputTotal;
    const toFixeds = parseFloat(addCalcu.toFixed(2))
    createElement(firstName, toFixeds, serial);
})


document.getElementById('new-page').addEventListener('click', function () {
    location.href = 'index2.html'
})




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