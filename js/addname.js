const players = [];
const btns = document.querySelectorAll('#select-btn');



// console.log(btns);
function makeList() {
    const OrderPlayerlist = document.getElementById('player-table');
    OrderPlayerlist.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        const name = players[i];

        const li = document.createElement('li');

        li.innerHTML = `
            <ol>${i + 1}.</ol>
            <li class = "mb-2">${name}</li>       
        `;

        OrderPlayerlist.appendChild(li);
    }
}


function displayPlayers() {
    // console.log('right now length ' + players.length);
    if (players.length <= 5) {
        makeList();
    } else {
        alert('more than 5');
        players.pop();
        makeList();
    }
}


for (let i = 0; i < btns.length; i++) {
    // console.log(btns[i]);
    btns[i].addEventListener('click', () => {
        const playerName = btns[i].parentNode.children[1].innerText;
        players.push(playerName);
        displayPlayers();
    })
}


function calculateTotal(numberValue) {
    const selcetId = document.getElementById(numberValue).value;
    const selcetIdString = parseInt(selcetId);
    return selcetIdString;
}


function playerExpensesId(textField) {
    const playerExpensesText = document.getElementById(textField);
    return playerExpensesText;
}

document.getElementById('calculate-field').addEventListener('click', function () {
    const parPlayer = document.getElementById('parPlayer-field').value;
    const parExpenses = parseInt(parPlayer);

    const calculateExpenses = parExpenses * players.length;

    const playerExpensesSalary = playerExpensesId('player-expenses-field').innerText = calculateExpenses;

    console.log(typeof playerExpensesSalary);

})


document.getElementById('calculate-total-field').addEventListener('click', function () {
    const totalExpenses = playerExpensesId('player-expenses-field').innerText;
    const totalExpensesSalary = parseInt(totalExpenses);
    // console.log(typeof totalExpensesSalary);
    const managerId = calculateTotal('manager-salary-field');
    const coachId = calculateTotal('coach-salary-field');
    const total = totalExpensesSalary + managerId + coachId;
    const totalAmount = document.getElementById('total-Amount');
    totalAmount.innerText = total;
})