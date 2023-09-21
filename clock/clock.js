let hrs= document.getElementById("hrs")
let min= document.getElementById("min")
let sec= document.getElementById("sec")

setInterval(()=>{
    let cuurentTime= new Date()
hrs.innerHTML=(cuurentTime.getHours()<10?"0":"")+ 
cuurentTime.getHours() ;
min.innerHTML=(cuurentTime.getMinutes()<10?"0":"")+
cuurentTime.getMinutes();
sec.innerHTML= (cuurentTime.getSeconds()<10?"0":"") +
cuurentTime.getSeconds();
},1000)

let cuurentTime= new Date()
hrs.innerHTML=cuurentTime.getHours();
min.innerHTML=cuurentTime.getMinutes()
sec.innerHTML= cuurentTime.getSeconds()