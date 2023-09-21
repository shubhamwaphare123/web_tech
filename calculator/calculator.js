(function(){

    let screen=document.querySelector(".screen");
    let btn=document.querySelectorAll(".btn");
    let clear=document.querySelector(".clear");
    let equal=document.querySelector(".equal")

    
    btn.forEach(function(btns){
        btns.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value += value
        })
    })

    btn.forEach(function(btns){
        btns.addEventListener('keypress',function(press){
            let value =press.target.dataset.num;
            screen.value +=value
         } )
        })

    equal.addEventListener("click",function(){
        if(screen.value===""){
            screen.value="";
        }

        else{
            let answer=eval(screen.value)
            screen.value=answer;

        }
    })

    clear.addEventListener("click",function(){
        screen.value="";  
    })

    
})
()
