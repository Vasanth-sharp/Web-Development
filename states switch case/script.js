let button=document.querySelector("button");
button.addEventListener("click",find);
function find(){
    let input=document.getElementById("input");
    let state=input.options[input.selectedIndex].value;
    let capital=" ";
    let resultdiv=document.createElement("div");
    resultdiv.id=("result");
    document.getElementById("container").appendChild(resultdiv);
    switch(state){
        case "TN":
            capital="Chennai";
            break;
        case "KL":
            capital="Thiruvananthapuram";
            break;
        case "KA":
            capital="Bengaluru";
            break;
        case "AP":
            capital="Amaravathi";
            break;
    }
    let text=`Capital of ${state} is ${capital}`;
    document.getElementById("result").innerHTML=text;
}