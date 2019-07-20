// sum
function sumValue(num1,num2){
    var result1=document.getElementById('sum1')
    var re1=num1+num2
    result1.innerHTML="result1:"+re1
}
// minus
function minusValue(num1,num2){
    var result2=document.getElementById('min')
    var re2=num1-num2;
    result2.innerHTML="result2:"+re2
}
// multi
function multiplyValue(num1, num2){
    var result3=document.getElementById('mul')
    var re3=num1*num2
    result3.innerHTML="result3:"+re3
}
//divide
function divideValue(num1,num2){
    var result4=document.getElementById('divi')
    var re4=num1/num2
    result4.innerHTML="result4:"+re4
}
var frm=document.getElementById("frm");
frm.addEventListener('click', function(e){
    e.preventDefault()
    var number1=document.getElementById('num1').value;
    var number2=document.getElementById('num2').value;
    var newNum= parseInt(number1,number2)
    sumValue(number1,number2, newNum)
    minusValue(number1,number2, newNum)
    multiplyValue(number1,number2, newNum)
    divideValue(number1,number2, newNum)
})





