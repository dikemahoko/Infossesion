function calculateTip(){
    const billAmount=parseFloat(document.getElementById("billAmount").value);
    const tipPercentage=parseFloat(document.getElementById("tipPercentage").value);
    TotalAmount=billAmount+(tipPercentage*billAmount);
    alert("Total amount : ",billAmount);
    
}