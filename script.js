let turn="X";

const changeturn = () =>{

    return turn === "X" ? "0" : "X"
}

const checkwin = () =>{
let arr = document.getElementsByClassName("boxtext");
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
wins.forEach(e =>{
if((arr[e[0]].innerText === arr[e[1]].innerText) && (arr[e[1]].innerText === arr[e[2]].innerText) && (arr[e[0]].innerText !== ""))
{
    document.querySelector('.result').innerText = arr[e[0]].innerText + " WON";
}
})
}

let boxes  =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn=changeturn();
        checkwin();
    }
}
)
}
)

btn.addEventListener('click', ()=>{
    let arr = document.getElementsByClassName("boxtext");
    Array.from(arr).forEach(element =>{
        element.innerText = " ";
        document.querySelector('.result').innerText = " ";
    })
            
})
