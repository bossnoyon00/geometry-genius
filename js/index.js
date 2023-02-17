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

    const addCalcu = 0.5 * firstInputTotal * secondInputTotal;
    createElement(firstName, addCalcu, serial);
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