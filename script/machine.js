// machine input -> value 
function getValueFromInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine show balance
function showBalance(){
    const balanceAmount = document.getElementById("balance");
    const balance = balanceAmount.innerText;
    return Number(balance);
}

// machine value -> id 
function setValue(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// machine id -> hide all -> show id 
function showId(id){
    // all element selected
    const addMoney = document.getElementById("add-money")
    const cashOut = document.getElementById("cashout")
    const transfer = document.getElementById("transfer-money")
    const payBill = document.getElementById("pay-bill")
    const cupon = document.getElementById("get-cupon")
    const history = document.getElementById("history-container")
    

    // make all selected element hidden
    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden");
    history.classList.add("hidden");
    transfer.classList.add("hidden");
    payBill.classList.add("hidden");
    cupon.classList.add("hidden");

    // remove hidden from selected id 
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}