let area=document.getElementById("area")
let timeDisplay=document.getElementById("timedisplay")
let clickme=document.querySelector(".clickme")
let bcps=document.getElementById("besttime")
let fclicks=0
let clicks=0
let count=0
let time=5000

area.addEventListener("click",()=>{
    clicks+=1
    clickme.innerHTML=clicks
    if (count==0){
        setTimeout(function incrementclicks(){
            alert(`you clicked ${clicks} times in ${time/1000} seconds`)
            if (fclicks<clicks){
                fclicks=clicks
                bcps.innerHTML=`Best CPS: ${fclicks/(time/1000)}`
            }
            clicks=0
            count=0
            clickme.innerHTML="click me"
        },time)
    count++
    }
})

// time

document.querySelector("#s1").addEventListener("click",()=>{
    time=1000
    timeDisplay.innerHTML=`Time:${time/1000}s`
})

document.querySelector("#s5").addEventListener("click",()=>{
    time=5000
    timeDisplay.innerHTML=`Time:${time/1000}s`
})

document.querySelector("#s10").addEventListener("click",()=>{
    time=10000
    timeDisplay.innerHTML=`Time:${time/1000}s`
})

document.querySelector("#s30").addEventListener("click",()=>{
    time=30000
    timeDisplay.innerHTML=`Time:${time/1000}s`
})

