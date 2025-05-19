function add(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = num1 + num2;
    return result
}

function sub(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result= num1-num2    
    return result;
}


function div(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result= num1/num2  
    return result;
  
}


function mult(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result= num1*num2
    return result;
    
}


function sqr(){
    let num1 = parseInt(document.getElementById("num1").value);
    let result= num1*num1;
    return result;
    
}

export {add,sub,div,mult,sqr};