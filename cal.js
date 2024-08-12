function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
};

let num1;
let num2;
let operand;
 function operate(num1,num2,operand){
    if (operand === "+"){
        add(num1,num2);
    }
    
    else if (operand === "x"){
        multiply(num1,num2);
    }
    else if (operand === "/"){
        divide(num1,num2);
    }
    else{
        subtract(num1,num2);
    }
 }


 const btns = document.querySelector(".btns");
 const nums = document.querySelector(".nums");
 const operators = document.querySelector(".operators");

 const box = document.createElement('button');

 const arr = ["AC", "+/-", "%"];
 for(let k = 0; k < arr.length;k++){
    const box = document.createElement('button')
    box.classList.add('box');
    box.textContent= arr[k];
    box.style.boxSizing = 'border-box';
    nums.appendChild(box);
 }


 const arr2 =[7,8,9,4,5,6,1,2,3,0,"."]
 for(let i = 0; i < arr2.length;i++){
    const box = document.createElement('button');
    box.classList.add('box');
    box.textContent=arr2[i];
    box.style.boxSizing = 'border-box';
    if(arr2[i]===0){
        box.style.width = "188px";
        box.style.textAlign = "start";
        box.style.paddingLeft = "40px";
    }
    else {
        box.style.width = "93px";
    }
    nums.appendChild(box);
 }

 const arr3 = ["/","x","-","+","="];
 for(let i = 0; i < arr3.length;i++){
    const box = document.createElement('button')
    box.classList.add('box');
    box.textContent=arr3[i];
    box.style.boxSizing = 'border-box';
    operators.appendChild(box);
 }


