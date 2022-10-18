//set expenses calaculate
document.getElementById('calculate-total').addEventListener('click', function() {
    //set food amount
    const foodAmount = document.getElementById('food-amount');
    const newFoodAmountText = foodAmount.value;
    const newFoodAmount = parseFloat(newFoodAmountText);
    //set rent amount
    const rentAmount = document.getElementById('rent-amount');
    const newRentAmountText = rentAmount.value;
    const newRentAmount = parseFloat(newRentAmountText);
    //set clothes amount
    const clothesAmount = document.getElementById('clothes-amount');
    const newClothesAmountText = clothesAmount.value;
    const newClothesAmount = parseFloat(newClothesAmountText);
    //update total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const newTotalExpenses = newFoodAmount + newRentAmount + newClothesAmount;
    if (newFoodAmount >= 0 && newRentAmount >= 0 && newClothesAmount >= 0) {
        totalExpenses.innerText = newTotalExpenses;
    } else {
        alert('Please input positive value.');
    }
    //set income amount
    const incomeAmount = document.getElementById('income-amount');
    const newIncomeAmountText = incomeAmount.value;
    const newIncomeAmount = parseFloat(newIncomeAmountText);
    //update total balance
    const totalBalance = document.getElementById('total-balance');
    const newTotalBalance = newIncomeAmount - newTotalExpenses;

    if (newTotalBalance >= 0) {
        totalBalance.innerText = newTotalBalance;
    } else {
        alert('Please input positive value.');
    }
})
document.getElementById('save-button').addEventListener('click', function() {
    // set saveAmount
    const saveAmount = document.getElementById('save-amount');
    const saveAmountText = saveAmount.value;
    const newSaveAmount = parseFloat(saveAmountText);
    // set inocome value 
    const incomeAmount = document.getElementById('income-amount');
    const newIncomeTotalAmountText = incomeAmount.value;
    const newIncomeAmount = parseFloat(newIncomeTotalAmountText);
    // set saving amount 
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.value;
    const savingAmountTotal = parseFloat(savingAmountText);

    const newSavingAmount = newIncomeAmount * newSaveAmount / 100;
    savingAmount.innerText = newSavingAmount;

    // set totalBalance value 
    const totalBalance = document.getElementById('total-balance');
    const newTotalBalanceText = totalBalance.innerText;
    const newTotalBalanceInfo = parseFloat(newTotalBalanceText);

    // set remaining balance 
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.value;
    const remainingBalanceTotal = parseFloat(remainingBalanceText);

    const newremainingBalance = newTotalBalanceInfo - newSavingAmount;
    if (newTotalBalanceInfo > newSavingAmount) {
        remainingBalance.innerText = newremainingBalance;
    } else {
        alert('Your Saving Amount is greater than your Balance. please input lower save amount.');
    }

})