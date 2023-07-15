const input=document.getElementById("input");
const find=document.querySelector("button");
const result=document.getElementById("result");
find.addEventListener("click",calculate);
function calculate()
{
    let dt=new Date(input.value);
    let date=dt.getDate();
    let year=dt.getFullYear();
    let month=dt.getMonth()+1;
    let a=new Date();
    let newdate=a.getDate();
    let newyear=a.getFullYear();
    let newmonth=a.getMonth();
    let n=newdate-date;
    let m=newmonth-month;
    if(n<0)
    {
        n=n*-1;
    }
    if(m<0)
    {
        m=m*-1;
    }
    result.innerHTML=` <p>you are ${newyear-year} years and ${m} months and ${n} days Old</p>`;
}