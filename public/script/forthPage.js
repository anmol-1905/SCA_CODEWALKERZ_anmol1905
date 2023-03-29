        
function fun2(boxId){
    document.getElementById(boxId).style.color = "black";
    document.getElementById(boxId).style.backgroundColor = "white";
}
let count = 0;
function fun1(boxId, buttonId){
    let x = document.getElementById(boxId);
    let ans = x.value.trim().toLowerCase();
    if((boxId=='ans1' && ans === 'humble') || (boxId==="ans2" && ans==='peru') || (boxId==="ans3" && ans==='camel')){
        x.style.backgroundColor = 'green';
        x.style.color = 'white';

        document.getElementById(boxId).disabled = true;
        document.getElementById(buttonId).disabled = true;
        count++;
        if(count===3) {
            setTimeout(()=>{
                window.location.href = `${__dirname}/finalPage`;
            }, 2000);
        }
    }
    else{
        x.style.backgroundColor = 'red';
        x.style.color = 'white';
    }
}