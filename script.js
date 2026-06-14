// 

function clearDisplay(){
    document.getElementById("inputBox").value="";
}

function appendValue(value){
    document.getElementById("inputBox").value+=value;
}

function calculate(){
    let display=document.getElementById("inputBox");

    try{
        display.value=eval(display.value);
    }catch{
        display.value="Error";
    }
}

function deleteLast(){
    let display=document.getElementById("inputBox");
    display.value=display.value.slice(0,-1);
}