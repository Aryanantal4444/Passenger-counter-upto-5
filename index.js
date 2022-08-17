let countEl= document.getElementById("count-el")
console.log(countEl)

let count= 0

/*  Increment-function */

/* Limited Number Of Counts */


function increment(){
    if(count <=4){
        count = count + 1
        countEl.innerText=count   
        console.log(count)     
    }    
}

/*  Decrement-function */

function decrement(){
    if(count > 0){
        count = count - 1
        countEl.innerText=count    
        console.log(count)
    }
}

/*  Save-function */

let saveEl=document.getElementById("save-el")


/* After Save The Value Counter will continue work */

function save(){
    let countSt = " " + count + " - " 
    saveEl.innerText += countSt
    console.log(count)
}

let resetEl=document.getElementById("reset-el")

/* After Save The Value Counter Start For 0 */

function reset(){
    count = count * 0
    countEl.innerText=count    
    console.log(count)
}