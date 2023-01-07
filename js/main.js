let counter=0;
function oneClickButton(element){
    counter++;
    element.innerHTML="Click me for plus: ";
    console.log((counter));
    changeMainButton();
}
function oneClickButtonminus(element){
    counter--;
    element.innerHTML="Click me for minus: ";
    console.log((counter));
    changeMainButton();
    }
function changeMainButton(){
    const button = document.getElementById("centerbutton")
    button.innerHTML=`Sum: ${counter}`
    button.style.background="green";
    if (counter>=10){
        (button.style.background="red")};
    if (counter<=-10){
        (button.style.background="blue")+(button.style.color="white")};
}