// step 1 click handler with deposit button click
document.getElementById("btn-deposit").addEventListener('click', () => {
    // step 2 get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // step 3 string to number
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step 4 get the current deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 5 string to number set the total deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotal;
    
    // step 6 get balance current total amount
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText; 
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // step 8 set current total balance
    balanceTotalElement.innerText = currentBalanceTotal
    // step 9 clear deposit field
    depositField.value = '';
})