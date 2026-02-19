document.getElementById("bonus-btn").addEventListener("click", function(){
    // 1. get cupon value 
    const cuponNumber = getValueFromInput("cupon");
    if(cuponNumber.length != 5){
        alert("invalid cupon. Try again");
        return;
    }


    const balance = showBalance();
    const cuponBonus = "5000";
    const newBalance = balance + Number(cuponBonus)

    if(cuponNumber == "12345"){
        alert("congratulations! you get 5000 taka bonus");
        setValue(newBalance);
        const history = document.getElementById("history-container");
        const histo = document.createElement("div")
        histo.innerHTML = `
        <div class="bg-base-100 py-3 w-full rounded-xl px-3">
            congratulations ! You get ${cuponBonus} Taka at  ${new Date()}
        </div>
        `
        history.append(histo)
    }
    else{
        alert("Invalid cupon");
        return;
    }
})   