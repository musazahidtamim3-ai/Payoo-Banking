document.getElementById("transfer-btn").addEventListener("click", function(){
    // 1. get agent number and validate it
    const cashoutNumber = getValueFromInput("transfer-number")
    if(cashoutNumber.length != 11){
        alert("Send Money failed. Invalid account number");
        return;
    }
    // 2. get cashout amount and validate it
    const cashoutAmount = getValueFromInput("transfer-amount");

    // 3. get balance
    const currentBalance = showBalance()

    // 4. calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("You have not enough money to send");
        return;
    }

    // 5. get pin and verification
    const pin = getValueFromInput("transfer-pin");
    if(pin == "1234"){
        alert("Send Money successfull. please press ok button");
        setValue(newBalance);
        const cashout = document.getElementById("history-container");
        const cash = document.createElement("div");
        cash.innerHTML = `
        <div class="bg-base-100 py-3 w-full rounded-xl px-3">
            ${cashoutAmount} Taka sendmoney successfull to ${cashoutNumber} at ${new Date()}
        </div>
        `
        cashout.append(cash)
    }
    else{
        alert("Pin number is not valid");
        return;
    }
})