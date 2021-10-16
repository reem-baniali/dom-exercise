//call divs by  id
let div1 = document.getElementById('p1_show');
let div2 = document.getElementById('p2_show');
let div3 = document.getElementById('p3_show');

//call text by  tag
let p1 = document.getElementsByTagName('p');
let p2 = document.getElementsByTagName('p');
let p3 = document.getElementsByTagName('p');


//hide text 
p1[0].style.display="none";
p2[2].style.display="none"; 
p2[4].style.display="none";
p2[5].style.display="none";

//add event listener to divs
div1.addEventListener('click', show1);
div2.addEventListener('click', show2);
div3.addEventListener('click', show3);

//add event listener to 
p1[1].addEventListener('click', hide1);
p1[3].addEventListener('click', hide2);
p1[6].addEventListener('click', hide3);



function show1() {
    div1.style.display="none";

    p1[0].style.display="block";
    p1[1].style.display="block";
}
function show2() {
    div2.style.display="none";
    p1[2].style.display="block";
    p1[3].style.display="block";
   
}

function show3() {
    div3.style.display="none";
    p1[4].style.display="block";
    p1[5].style.display="block";
    p1[6].style.display="block";
   
}



function hide1() {
    p1[0].style.display="none";
    p1[1].style.display="none";
    div1.style.display="block";
}

function hide2() {
    p1[2].style.display="none";
    p1[3].style.display="none";
    div2.style.display="block";
}

function hide3() {
    p1[4].style.display="none";
    p1[5].style.display="none";
    p1[6].style.display="none";
    div3.style.display="block";
}