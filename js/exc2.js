let myDiv = document.getElementById('mydiv');
console.log(myDiv);

myDiv.style.backgroundColor="blue";
let counter=0;
// ======================== onclick change ================ 


// myDiv.addEventListener('click',()=>{counter++,changeColor()})

// function changeColor (){
//     if (counter==1){
//         myDiv.style.backgroundColor='red';
//     } else if (counter==2) {
//         myDiv.style.backgroundColor='green';

//     } 
//     else if (counter==3) {
//         myDiv.style.backgroundColor='blue';
//     }
//     else {
//         counter=0;
//     }
    // }



// ==================Random change ===============

let colors=["red","green","blue"];
myDiv.addEventListener('click',()=>{counter++,changeColor()})
function changeColor (event){
let random=getRandomInt(colors.length);
myDiv.style.backgroundColor=colors[random];
    }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
