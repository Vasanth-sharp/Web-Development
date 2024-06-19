/*const promise=new Promise((resolve,resject)=>{
    let sum=1+1;
    if(sum==2)
    {
        resolve("success")
    }
    else{
        resject("failed")
    }
})

promise
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))

// setTimeout(()=>{
//     console.log("hi")
// },1000)

// function setTimeoutPromise(duration){
//     return new Promise((res,rej)=>{
//         setTimeout(res,duration)
//     })
// }

// setTimeoutPromise(2000)
// .then(()=>{console.log("hi")})

//      CALLBACK HELL

setTimeout(() => {
  console.log("hi:1");
  setTimeout(() => {
    console.log("hi:2");
    setTimeout(() => {
      console.log("hi:3");
    });
  }, 250);
}, 250);

//PROMISE IN CALLBACK HELL

function setTimeoutPromise(duration) {
  return new Promise((res, rej) => {
    setTimeout(res, duration);
  });
}
setTimeoutPromise(250)
.then(()=>{console.log("hi set:1")
setTimeoutPromise(250)
.then(()=>{console.log("hi set:2")
setTimeoutPromise(250)
.then(()=>{console.log("hi set:3")})})})

setTimeoutPromise(250)
  .then(() => {
    console.log("cool hi:1");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("cool hi:2");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("cool hi:3");
  });

//      EVENTLISTENER in PROMISE

const btn = document.querySelectorAll("button");

function addEventByPromise(element, method) {
  return new Promise((res, rej) => {
    element.addEventListener(method, res);
  });
}

addEventByPromise(btn[0], "click").then((e) => {
  console.log("clicked");
});
*/

//      PROMISE METHODS

// let reachA=new Promise((res,rej)=>{
//     let reached=true;
//     if(reached)
//     {
//         setTimeout(res,3000,"sam reached home")
//     }
//     else{
//         rej("sam not reached")
//     }
// })

// let reachB=new Promise((res,rej)=>{
//     let reached=true;
//     if(reached)
//     {
//         setTimeout(res,1000,"ram reached home")
//     }
//     else{
//         rej("ram not reached")
//     }
// })

// let reachc=new Promise((res,rej)=>{
//     let reached=true;
//     if(reached)
//     {
//         setTimeout(res,2000,"vinu reached home")
//     }
//     else{
//         rej("vinu not reached")
//     }
// })

// Promise.all([reachA,reachB,reachc])
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))

//PROMISE pending,(rejected,fullfilled) settled
// Promise.allSettled([reachA,reachB,reachc])
// .then((msg)=>{console.log(msg)})
// .catch((err)=>{console.error(err)})

// Promise.any([reachA,reachB,reachc])
// .then((msg)=>{console.log(msg)})
// .catch((err)=>{console.error(err)})
//ethavuthu onnu resove aagura varikum

function setTimeoutPromise(duration) {
  return new Promise((res, rej) => {
    setTimeout(res, 250);
  });
}  

setTimeoutPromise(250).then(() => {
  console.log("profun:1");
  setTimeoutPromise(250).then(() => {
    console.log("profun:2");
    setTimeoutPromise(250).then(() => {
      console.log("profun:3");
    });
  });
});


