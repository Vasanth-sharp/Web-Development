let button=document.getElementById("submit");
button.addEventListener("click",calculate);
let resultdiv=document.createElement("div");
resultdiv.className="result";
document.querySelector(".container").appendChild(resultdiv);
function calculate(){
    let input=document.getElementById("user").value;
    console.log(input);
    if(input.includes("+")){ //input.indexof("+")!==-1
       let arr=input.split("+");
       let a=Number(arr[0]);
       let b=Number(arr[1]);
       let ans=a+b;
       let operator="+";
       let text=`Sum of ${a} ${operator} ${b} is ${ans}`;
       console.log(ans);
       console.log(text);
       document.querySelector(".result").innerHTML=text;
    }
    else if(input.includes("/")){
        let arr=input.split("/");
        let a=Number(arr[0]);
        let b=Number(arr[1]);
       let ans=a/b;
       let operator="/";
        let text=`Division of ${a} ${operator} ${b} is ${ans}`;
        console.log(ans);
        console.log(text);
        document.querySelector(".result").innerHTML=text;
    }
    else if(input.includes("*")){
        let arr=input.split("*");
        let a=Number(arr[0]);
       let b=Number(arr[1]);
       let ans=a*b;
       let operator="*";
        let text=`Multiplication of ${a} ${operator} ${b} is ${ans}`;
        console.log(ans);
        console.log(text);
        document.querySelector(".result").innerHTML=text;
    }
    else {
        let arr=input.split("-");
        let a=Number(arr[0]);
       let b=Number(arr[1]);
       let ans=a-b;
       let operator="-";
        let text=`Subraction of ${a} ${operator} ${b} is ${ans}`;
        console.log(ans);
        console.log(text);
        document.querySelector(".result").innerHTML=text;
    }
}