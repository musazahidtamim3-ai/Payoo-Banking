document.getElementById("add-btn").addEventListener("click", function(){
    // 1. get bank name 
    const bankName = getValueFromInput("select-bank");
    if(bankName == "Select bank"){
        alert("Please select a Bank");
        return;
    }

    // 2. get bank account number 
    const accNo = getValueFromInput("bank-number");
    if(accNo.length !== 11){
        alert("Invalid acoount number. Make sure 11 numbers");
        return;
    } 

    // 3. get amount 
    const amount = getValueFromInput("add-amount");
    if(amount > 1000000){
        alert("You have reached your add money limit. Please make sure your amount is less than 10 Laks for safe transaction");
        return;
    }

    // 4. show balance
    const balance = showBalance();
    const newBalance = balance + Number(amount)

    // 5. get pin and verify
    const pinNumber = getValueFromInput("add-pin");
    if(pinNumber == "1234"){
        alert(`Add money successfull from ${bankName} at ${new Date()}`);
        setValue(newBalance);
        const history = document.getElementById("history-container");
        const histo = document.createElement("div")
        histo.innerHTML = `
        <div class="bg-base-100 py-3 w-full rounded-xl px-3">
            ${amount} Taka Add money successfull from ${bankName} to ${accNo} at  ${new Date()}
        </div>
        `
        history.append(histo)
    }
    else{
        alert("Invalid Pin. Try again");
        return;
    }
})