function add(){
    var total = parseFloat(document.getElementById('total').innerHTML) || 0; 
    
    var amount = parseFloat(document.getElementById('amount').value) || 0;
    
    if(amount >= 0)
        document.getElementById('total').innerHTML = total + amount;
    else
        document.getElementById('total').innerHTML = total + amount;

    var income = parseFloat(document.getElementById('income').innerHTML);

    var expense = parseFloat(document.getElementById('expense').innerHTML);
     
    if(amount >= 0)
        document.getElementById('income').innerHTML = income + amount;
    else
        document.getElementById('expense').innerHTML = expense - amount;

    var desc = document.getElementById('text').value;

    if(amount >= 0)
        document.getElementById('his-tab').innerHTML += 
    `<div id="bord">
     <div>${desc}</div>
     <div>${amount}</div>
     </div>
    `
}
