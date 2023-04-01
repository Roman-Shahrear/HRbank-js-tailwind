/*
1.add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
3.also make sure to convert the input into a number by using parseFloat
4.get previous withdraw total
5.calculate total withdraw amount
6.set total withdraw amount
7.get the previous balance total
8.after withdraw calculate total balance
*/

// step 1
document.getElementById('btn-withdraw').addEventListener('click', () => {
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // step 3
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step 5
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step 6
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step 8
    withdrawField.value = ''; 

})