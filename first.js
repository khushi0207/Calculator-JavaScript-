const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}
function clearr(){
    display.value = "";
}

function calci(){
    try{
    display.value= eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}