

function highLightCard (selector){
    var  element = document.querySelector(selector);
    element.classList.toggle("highLightCard");
}

//function checkKeyBoardCode (){
    //document.addEventListener('keydown', (event) => {
        //var name = event.key;
        //var code = event.code;

        //alert(`Tecla pressionada ${name} \r\n Key Code value ${code}`);        
    //}, false);
//}

//checkKeyBoardCode();

function addKeyboardEventListeners() 
{
    document.addEventListener('keydown', (event)=>{
        
    var ingresso1 = document.getElementById ("quinta");
    var ingresso2 = document.getElementById ("sexta");
    var ingresso3 = document.getElementById ("sabado");
    var ingresso4 = document.getElementById ("domingo");

    var code = event.code ; 
    if (code == 'Digit1') {
        ingresso1.classList.toggle ("highLightCard");
        ingresso2.classList.remove ("highLightCard");
        ingresso3.classList.remove ("highLightCard");
        ingresso4.classList.remove ("highLightCard");
    }

    if (code == 'Digit2') {
        ingresso1.classList.remove ("highLightCard");
        ingresso2.classList.toggle ("highLightCard");
        ingresso3.classList.remove ("highLightCard");
        ingresso4.classList.remove ("highLightCard");
    }

    if (code == 'Digit3') {
        ingresso1.classList.remove ("highLightCard");
        ingresso2.classList.remove ("highLightCard");
        ingresso3.classList.toggle ("highLightCard");
        ingresso4.classList.remove ("highLightCard");
    }

    if (code == 'Digit4') {
        ingresso1.classList.remove ("highLightCard");
        ingresso2.classList.remove ("highLightCard");
        ingresso3.classList.remove ("highLightCard");
        ingresso4.classList.toggle ("highLightCard");
    }
}, false);
}

addKeyboardEventListeners() 