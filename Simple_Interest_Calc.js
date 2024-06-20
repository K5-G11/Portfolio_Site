function compute()
{
    var principal = document.getElementById("principal").value; 
    var rate = document.getElementById("rate");
    var year = document.getElementById("year");
    var interest = principal * year * rate / 100;
    var year = new Date().getFullYear() + parseFloat(year);
    var amount = parseInt(principal) + parseInt(interest);
    var result = document.getElementById("result");
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

if (principal <= 0) {
    alert("Please Enter Positive Number")
    doument.getElementById("principal").focus
} else { result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
}
