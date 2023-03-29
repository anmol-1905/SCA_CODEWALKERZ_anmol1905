
function fun2(){
    document.getElementById('box').style.color = "black";
    document.getElementById('box').style.backgroundColor = "white";
}

function fun1(){
    let x = document.querySelector('#box');
    let ans = x.value.toLowerCase();
    console.log('afd');

    if(ans === 'raftar' || ans === 'raftaar'){
        x.style.backgroundColor = 'green';
        x.style.color = 'white';

        document.querySelector('#box').disabled = true;
        document.querySelector('#butn').disabled = true;

        setTimeout(()=>{
            window.location.href=`https://sca-codewalkerz-anmol19.onrender.com/forthPage`;
          }, 2000);
    }
    else{
        x.style.backgroundColor = 'red';
        x.style.color = 'white';
    }
}