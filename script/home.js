document.getElementById("withdraw-btn").addEventListener("click", function(){
    // 1. get agent number and validate it
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber  = cashoutNumberInput.value;
    if(cashoutNumber.length != 11){
        alert("Cashout failed. Invalid agent number");
        return;
    }

    // 2. get cashout amount and validate it
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;

    // 3. get balance
    const balanceAmount = document.getElementById("balance");
    const balance = balanceAmount.innerText
   
    // 4. calculate balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("You have not enough money to cashout");
        return;
    }

    // 5. get pin and verification
    const pinNumber = document.getElementById("inp-pin");
    const pin = pinNumber.value;
    if(pin == "1234"){
        alert("Cashout successfull. please press ok button");
        balanceAmount.innerText = newBalance;
    }
    else{
        alert("Pin number is not valid");
        return;
    }
})