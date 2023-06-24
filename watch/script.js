 function update(){
    let timeanddate=new Date();
    let hr=timeanddate.getHours();
    let sec=timeanddate.getSeconds();
    let month=timeanddate.getMonth();
    let date=timeanddate.getDate();
    let min=timeanddate.getMinutes();
    let today=timeanddate.getDay();
    let c;
    switch(today){
        case 1:
            c="Monday";
            break;
        case 2:
            c="Tuesday";
            break;
        case 3:
            c="Wednesday";
            break;
        case 4:
            c="Thursday";
            break;
        case 5:
            c="Friday";
            break;
        case 6:
            c="Saturday";
            break;
        case 7:
            c="Sunday";
            break;
    }
    if(hr>12){
        hr=hr-12;
        document.getElementById("ampm").innerHTML="PM";
    }
    document.getElementById("year").innerHTML=timeanddate.getFullYear();
    document.getElementById("month").innerHTML=pad(month);
    document.getElementById("day").innerHTML=pad(date);
    document.getElementById("hour").innerHTML=pad(hr);
    document.getElementById("min").innerHTML=pad(min);
    document.getElementById("sec").innerHTML=pad(sec);
    document.getElementById("milli").innerHTML=timeanddate.getMilliseconds();
    document.getElementById("today").innerHTML=c;
     }
 setInterval(update,1000);
 function pad(num){
    let final= num<10?num="0"+num:num;
    return final;
 }