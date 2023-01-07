let counter=0;
function oneClickButton(element){
    counter++;
    element.innerHTML="Click me for plus: ";
    element.style.background="green"
    console.log((counter));
}
function oneClickButtonminus(element){
    counter--;
    element.innerHTML="Click me for minus: ";
    element.style.background="green"
    console.log((counter));
    }
function oneClickButtonsum(element){
    element.style.background="green";
    if (counter>=10){(element.style.background="red")};
    if (counter<=10){(element.style.background="blue")+(element.style.color="white")};
    if (counter<=0){(element.innerHTML="Sum: "+counter)};//это юзлес строка я знаю, это была попытка сделать другое.
    element.innerHTML="Sum: "+counter
}