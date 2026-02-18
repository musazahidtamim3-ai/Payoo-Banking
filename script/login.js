// console.log("connected")

document.getElementById("login-btn").addEventListener("click", function(){
    // 1. get mobile number

    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // 2. get pin number

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    // 3. match the mobile number and pin

    if ( contactNumber == "01823456789" && pin == "1234"){
        alert("Login Success")
        window.location.replace("./home.html")
    }
    else{
        alert("Login failed. Please try again")
    }
})
