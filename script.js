let expenses = [];
let quantities =[];
let totalAmount = 0;
let totalQuantity = 0;
//let rowIndex = 1;

//const categorySelect = document.getElementById('category-select');
const categoryInput = document.getElementById('category-input');
const quantityInput = document.getElementById('quantity-input');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');
const quantityTableBody = document.getElementById('quantity-table-body');
const totalQuantityCell = document.getElementById('total-quantity');

addBtn.addEventListener('click', function() {
    //const category = categorySelect.value;
    const category = categoryInput.value;
    const quantity = Number(quantityInput.value);
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please add a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }
    if (quantity === '') {
        alert('Please add the quantity');
    }
    expenses.push({/*index: rowIndex, */category, quantity, amount, date});

    //rowIndex++;

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    totalQuantity += quantity;
    totalQuantityCell.textContent = totalQuantity;


    
    const newRow = expensesTableBody.insertRow();
    //const indexCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();
    const quantityCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    //const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    //indexCell.textContent = expenses.length;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        //const deletedExpense = expenses.splice(indexToDelete, 1)[0];

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        totalQuantity -= expense.quantity;
        totalQuantityCell.textContent = totalQuantity;

        expensesTableBody.removeChild(newRow); 
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    quantityCell.textContent = expense.quantity;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    dateCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    totalQuantity += expense.quantity;
    totalAmountCell.textContent = totalQuantity;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const quantityCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        totalQuantity -= expense.quantity;
        totalQuantityCell.textContent = totalQuantity;

        expensesTableBody.removeChild(newRow); 
    });
    categoryCell.textContent = expense.category;
    quantityCell.textContent = expense.quantity;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    dateCell.appendChild(deleteButton);

}