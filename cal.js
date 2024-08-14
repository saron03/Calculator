 const btns = document.querySelector(".btns");
 const nums = document.querySelector(".nums");
 const operators = document.querySelector(".operators");

 const box = document.createElement('button');

 const arr = ["AC", "+/-", "%"];
 const arr2 =[7,8,9,4,5,6,1,2,3,0,"."]
 const arr3 = ["/","x","-","+","="];


 for(let k = 0; k < arr.length;k++){
    const box = document.createElement('button')
    box.classList.add('box');
    box.textContent= arr[k];
    box.style.boxSizing = 'border-box';
    box.style.backgroundColor = 'lightblue';
    box.style.color = 'black';
    nums.appendChild(box);
 }

 for(let i = 0; i < arr2.length;i++){
    const box = document.createElement('button');
    box.classList.add('box');
    box.textContent=arr2[i];
    box.style.boxSizing = 'border-box';
    box.style.backgroundColor = "grey";
    box.style.color = "white";
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

 for(let i = 0; i < arr3.length;i++){
    const box = document.createElement('button')
    box.classList.add('box');
    box.textContent=arr3[i];
    box.style.boxSizing = 'border-box';
    operators.appendChild(box);
    box.style.backgroundColor = "orange";
    box.style.color = 'white';
 }



 document.querySelectorAll('.box').forEach(box => {
    box.addEventListener("click", function () {
        let originalColor = box.style.backgroundColor;
        let lightColor;
        if (originalColor === 'lightblue') {
            lightColor = 'white'; 
        } else if (originalColor === 'grey') {
            lightColor = '#d3d3d3'; 
        } else if (originalColor === 'orange') {
            lightColor = '#ffd700'; 
        }
        
        box.style.backgroundColor = lightColor;
        
        setTimeout(() => {
            box.style.backgroundColor = originalColor;
        }, 250);
    });
});
let num1 = '';
let num2 ='';
let operand='';
let oper = false;
let result;
let newCal = false;
let curr = false;

const display = document.querySelector('.display');
const text = document.createElement("div");
text.classList.add("text");
display.appendChild(text);
text.textContent = 0;

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener("click", function(){
        let value = box.textContent;

        if(!isNaN(value)){
            if(newCal){
                num1 = '';
                num2 ='';
                operand='';
                newCal = false;
            }
            if (!oper) {
                num1 += value;
                text.textContent = num1;
            } else {
                num2 += value;
                text.textContent = num2;
            }

        } 
        else if (!oper && value === ".") {
            if (!num1.includes(".")) {
                num1 += value;
                text.textContent = num1;
            }
        } 
        else if (!oper && value === "+/-") {
            if (num1 === "") {
                num1 += "-";
            } else {
                num1 = String(Number(num1) * -1);
            }
            text.textContent = num1;
        } 
        else if (oper && value === "+/-") {
            if (num2 === "") {
                num2 += "-";
            } else {
                num2 = String(Number(num2) * -1);
            }
            text.textContent = num2;
        } 
        else if (oper && value === ".") {
            if (!num2.includes(".")) {
                num2 += value;
                text.textContent = num2;
            }
        }
        else if(['+', '-', 'x', '/', '%'].includes(value)){
            if(!oper){
                operand = value;
                oper = true;
                newCal = false;
            }
            else{
                operate(Number(num1), Number(num2), operand);
                num1 = result;
                num2 = '';
                operand = value;
                text.textContent = num1;
            }
        }
        else if(value === "AC"){
            num1 = "";
            num2 = "";
            operand = "";
            oper = false;
            text.textContent = 0;
        }
        else if(value === "="){
            operate(Number(num1), Number(num2),operand);
            num1 = result;
            num2 = "";
            operand = "";
            oper = false;
            newCal = true;
        }
    })
});



function operate(num1,num2,operand){
    if (operand === "+"){
        result = add(num1,num2);
    }
     
    else if (operand === "x"){
        result = multiply(num1,num2);
    }
    else if (operand === "/"){
        result = divide(num1,num2);
     }
     else if(operand === "-"){
        result = subtract(num1,num2);
     }
     else if(operand === "%"){
        result =  num1 / 100;
     }
     else{
        result = "Error";
     }
    
    text.textContent = result; 
}


function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error"; 
    }
}

/*
-Keyboard support
-light color wehn clicked stay longer
-the display when too much number is entered
-submitt */